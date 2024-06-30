import AboutSkills from "../../Components/AboutSkills/AboutSkills.jsx";
import FeatureProjects from "../../Components/FeatureProjects/FeatureProjects.jsx";
import Banner from "../../Shared/Banner/Banner.jsx";


const Home = () => {
    return (
        <div>
            <Banner
                h1={"MD Kawser Ferodus Safi"}
                h3={"WEB-developer"}
            ></Banner>
            <AboutSkills></AboutSkills>
            <FeatureProjects></FeatureProjects>
        </div>
    );
};

export default Home;