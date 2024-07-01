import { FaArrowRight } from "react-icons/fa";
import Banner from "../../Shared/Banner/Banner.jsx";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_wt30nw7', 'template_d1aqstq', form.current, {
                publicKey: '11__AMamyO91vDWSR',
            })
            .then(
                () => {
                    toast.success("Your message has been sent successfully!")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <Banner
                h1={"CONTACT ME"}
                h3={"SAY HELLO TO ME"}
            ></Banner>
            <div className="bg-white max-w-6xl lg:mx-auto mx-5 mt-10 lg:mt-20">
                <h3 className="text-3xl font-bold mb-6 league-spartan lg:text-left text-center">Contact me</h3>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="mb-4">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="from_name"
                                className="w-full px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-b border-gray-700"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="from_email"
                                className="w-full px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-b border-gray-700"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            className="w-full px-3 py-2 placeholder-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  border-b border-gray-700"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className='bg-[#D9D9D9] py-2 px-5 inline-flex items-center gap-2 justify-center'>
                            <FaArrowRight /> Contact me
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
