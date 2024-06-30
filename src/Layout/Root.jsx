import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div>Footer</div>
        </div>
    );
};

export default Root;