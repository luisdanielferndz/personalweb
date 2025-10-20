import Layout from "../../hocs/layouts/Layout"
import Footer from "../../components/navigations/Footer";
import Navigation from "../../components/navigations/Navigation";
import Header from "../../components/home/Header";


function Home(){
    return(
        <Layout>
            <Navigation/>
            <Header/>
            <Footer/>
        </Layout>
    )
}
export default Home
