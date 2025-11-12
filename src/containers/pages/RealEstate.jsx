import ContactSection from "../../components/contact/ContactSection"
import RealEstateVideo from "../../components/realestate/RealEstateVideo"
import RealEstateDevice from "../../components/realestate/RealEstateDevice"
import RealEstateHome from "../../components/realestate/RealEstateHome"
import Layout from "../../hocs/layouts/Layout"


function RealEstate (){

    return(
        <Layout>
            <RealEstateVideo/>
            <RealEstateHome/>
            <RealEstateDevice/>
            <ContactSection/>

        </Layout>
    )

}
export default RealEstate
