import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Footer from "../Shared/Footer/Footer";

AOS.init();


const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;