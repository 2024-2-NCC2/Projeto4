import './Navbar';
import '../styles/firstSection.css';
import Navbar from "./Navbar";

export default function FirstSection() {
    return (
        <div className="firstSection">
            <Navbar/>
            <div className="main-content">
                <div className="main-image">
                    <h1>Atitudes que fazem a diferença</h1>
                    <img src="https://placehold.co/800x400/000000/FFFFFF/png" alt=""/>
                </div>
                <div className="partners">
                    <img src="/company1.svg" alt=""/>
                    <img src="/company2.svg" alt=""/>
                    <img src="/company3.svg" alt=""/>
                    <img src="/company4.svg" alt=""/>
                </div>
            </div>
        </div>
    )
}