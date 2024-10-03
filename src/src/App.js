import './App.css';
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import AboutUsSection from "./components/AboutUsSection";

function App() {
    return (
        <div className="App">
            <FirstSection/>
            <SecondSection/>
            <ThirdSection />
            <AboutUsSection />
        </div>
    );
}

export default App;
