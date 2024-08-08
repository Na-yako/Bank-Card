import "./App.css";
import { details } from "./components/data";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Img from "./components/Img";
import img from "./images/img1.png"




export default function App() {
    return (
        <div className="app">
            <div className="app-container">

                <Nav />
                <Header />
                <div className="mains">
                    {details.map((detail) => {
                     const {para,icon,line} = detail;
                     return <Main para={para} icon={icon} line={line} />
                    })}
                    <div className="absolute">
                      <Img img={img}/>
                    </div>
                </div>
               <Footer />
            </div>
        </div>
    )
}