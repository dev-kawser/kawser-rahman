import './banner.css'

const Banner = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="pt-44 flex flex-col gap-3 items-center">
                <h1 className="lg:text-8xl uppercase league">
                    MD Kawser Ferodus Safi
                </h1>
                <h3 className="lg:text-3xl text-spacing font-light uppercase league-spartan">
                    WEB-developer
                </h3>
            </div>
        </div>
    );
};

export default Banner;