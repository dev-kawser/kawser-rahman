import { Outlet } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Shared/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import ChatForm from '../Components/ChatForm/ChatForm';

AOS.init();

const Root = () => {
    return (
        <div className="relative">
            <Outlet />
            <Footer />
            <div className="fixed lg:flex hidden bottom-5 right-3 z-50">
                <ChatForm />
            </div>
            <Toaster position="top-center" reverseOrder={true} />
        </div>
    );
};

export default Root;
