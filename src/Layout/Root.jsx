import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

AOS.init();


const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default Root;