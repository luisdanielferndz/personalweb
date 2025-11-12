import Layout from "../../hocs/layouts/Layout"
import Header from "../../components/home/Header";
import HomeSignatureAnimation from "../../components/home/HomeSignatureAnimation";
import HomeStats from "../../components/home/HomeStats";
import HomeBookPromo from "../../components/home/book/HomeBookPromo";
import SocialMarquee from "../../components/others/SocialMarquee";
import HomeAbInformation from "../../components/home/HomeAbInformation";
import ContactSection from "../../components/contact/ContactSection";
import HomeRealEstate from "../../components/home/HomeRealEstate";
import HomeDeveloper from "../../components/home/HomeDeveloper";

function Home(){
    return(
        <Layout>
            <Header/>
            <SocialMarquee/>

            <HomeAbInformation/>
            {/* <SocialMarquee/> */}
            <HomeRealEstate/>
            <HomeDeveloper/>
            <HomeSignatureAnimation/>
            <HomeStats/>
            <HomeBookPromo/>
            <ContactSection/>
        </Layout>
    )
}
export default Home
