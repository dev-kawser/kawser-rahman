import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();


const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default Root;