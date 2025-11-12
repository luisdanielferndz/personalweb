import ContactSection from "../../components/contact/ContactSection"
import DeveloperAboutSection from "../../components/developer/DeveloperAboutSection"
import DeveloperHeroSection from "../../components/developer/DeveloperHeroSection"
import DeveloperProjectSection from "../../components/developer/DeveloperProjectSection"
import DeveloperSkillSection from "../../components/developer/DeveloperSkillSection"
import Layout from "../../hocs/layouts/Layout"


function Developer (){

    return(
        <div className="dark bg-fondoDev text-white min-h-screen">

            <Layout>
                <DeveloperHeroSection/>
                <DeveloperAboutSection/>
                <DeveloperSkillSection/>
                <DeveloperProjectSection/>
                <ContactSection/>

            </Layout>

        </div>
        
    )   

}
export default Developer
