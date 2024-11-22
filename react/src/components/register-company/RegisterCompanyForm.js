import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

import '../../styles/form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function RegisterCompanyForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:3001').then(res => {
            if (res.data.valid) {
                setName(res.data.email);
            } else {
                navigate('/login')
            }
        }).catch(err => console.log(err))
    }, [])

    const handleClickRegisterCompany = async (values) => {
        try {
            Axios.post("http://localhost:3001/register-company", {
                email: name,
                name: values.name,
                area: values.area,
                contact: values.contact,
                address: values.address,
                cnpj: values.cnpj,
                ods: values.ods
            }).then(navigate('/')).catch((err) => alert(err))
        } catch (err) {
            console.log(err)
        }
    };

    const validationRegister = yup.object().shape({
        name: yup.string().required("Informe o nome da ONG"),
        area: yup.string().required("Informe a área de atuação"),
        contact: yup.string().required("Informe o contato"),
        address: yup.string().required("Informe o endereço"),
        cnpj: yup.string().required("Informe o cnpj"),
        ods: yup.string().required("Informe a ODS atendida"),
    })

    const [focusedField, setFocusedField] = useState({});

    const handleFocus = (fieldName) => {
        setFocusedField((prev) => ({ ...prev, [fieldName]: true }));
    };

    const handleBlur = (fieldName, value) => {
        setFocusedField((prev) => ({ ...prev, [fieldName]: !!value }));
    };

    return (
        <Container>
            <RegisterBox>
                <H2>CADASTRE SUA ONG E AGUARDE O CONTATO DE UM INVESTIDOR</H2>
                <Formik
                    initialValues={{ email: "", area: "", contact: "", address: "", cnpj: "", ods: "" }}
                    validationSchema={validationRegister}
                    onSubmit={handleClickRegisterCompany}
                >
                    {({ values }) => (
                        <Form>
                            {['name', 'area', 'contact', 'address', 'cnpj', 'ods'].map((field) => (
                                <InputBox
                                    key={field}
                                    isActive={focusedField[field] || values[field]}
                                >
                                    <label className="input-label">
                                        {field === 'area' ? 'Área de atuação' :
                                            field === 'contact' ? 'Contato' :
                                                field === 'name' ? 'Nome da ONG' :
                                                    field === 'address' ? 'Endereço' :
                                                        field === 'cnpj' ? 'cnpj' :
                                                            field === 'ods' ? 'ODS atendida' :
                                                                field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <Field
                                        name={field}
                                        className="form-field"
                                        onFocus={() => handleFocus(field)}
                                        onBlur={(e) => handleBlur(field, e.target.value)}
                                    />
                                    <ErrorMessage component="span" name={field} className="form-error" />
                                </InputBox>
                            ))}
                            <Links>
                                <SubmitButton type="submit">Continuar</SubmitButton>
                            </Links>
                        </Form>
                    )}
                </Formik>
            </RegisterBox>
        </Container>
    )
}


const RegisterBox = styled.div`
  background-color: white;
  padding: 32px 48px;
  border-radius: 18px;
  width: 300px;
  height: max-content;
  margin-bottom: 120px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
  padding-bottom: 38px;
  color: #455a64;
`;

const SubmitButton = styled.button`
  padding: 8px 32px;
  background-color: #074173;
  border: none;
  border-radius: 12px;
  width: 100%;
  color: #cdcdcd;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  color: #455a64;
  text-decoration: none;
`;

const InputBox = styled.div`
  position: relative;
  margin: 16px 0;

  .form-field {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 12px 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.25s;

    &:focus {
      outline: none;
      border-color: #074173;
    }
  }

  .input-label {
    position: absolute;
    left: 8px;
    top: ${(props) => (props.isActive ? '-8px' : '12px')};
    font-size: ${(props) => (props.isActive ? '12px' : '16px')};
    color: ${(props) => (props.isActive ? '#074173' : '#aaa')};
    background: white;
    padding: 0 4px;
    transition: all 0.25s;
    pointer-events: none;
  }
`;


export default RegisterCompanyForm;