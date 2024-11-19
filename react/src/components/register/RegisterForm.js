import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';

import '../../styles/form.css'
import { Link, useNavigate } from 'react-router-dom';


function RegisterForm() {
    const navigate = useNavigate();

    const handleClickRegister = async (values) => {
        try {
            Axios.post("http://localhost:3001/register", {
                email: values.email,
                password: values.senha
            }).then(navigate('/login')).catch((err) => alert(err))
        } catch (err) {
            console.log(err)
        }
    };

    const validationRegister = yup.object().shape({
        email: yup.string().email("Insira um e-mail válido").required("Este campo é obrigatório"),
        senha: yup.string().min(8, "A senha deve conter no mínimo 8 caractéres").required("Este campo é obrigatório"),
        confirmPassword: yup.string().oneOf([yup.ref('senha'), null], "As senhas devem ser iguais").required("Este campo é obrigatório"),
    });

    const [focusedField, setFocusedField] = useState({});

    const handleFocus = (fieldName) => {
        setFocusedField((prev) => ({ ...prev, [fieldName]: true }));
    };

    const handleBlur = (fieldName, value) => {
        setFocusedField((prev) => ({ ...prev, [fieldName]: !!value }));
    };

    return (
        <RegisterBox>
            <H2>FAÇA SEU CADASTRO</H2>
            <Formik
                initialValues={{ email: "", senha: "", confirmPassword: "" }}
                validationSchema={validationRegister}
                onSubmit={handleClickRegister}
            >
                {({ values }) => (
                    <Form>
                        {['email', 'senha', 'confirmPassword'].map((field) => (
                            <InputBox
                                key={field}
                                isActive={focusedField[field] || values[field]}
                            >
                                <label className="input-label">
                                    {field === 'confirmPassword' ? 'Confirme sua senha' : field.charAt(0).toUpperCase() + field.slice(1)}
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
                            <Link to={'/login'}>
                                <Anchor>Já possui uma conta?</Anchor>
                            </Link>
                        </Links>
                    </Form>
                )}
            </Formik>
        </RegisterBox>
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


export default RegisterForm;