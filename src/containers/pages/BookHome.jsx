import BookHomeInfo from "../../components/home/book/BookHomeInfo"
import BookSectionArte from "../../components/home/book/BookSectionArte"
import Layout from "../../hocs/layouts/Layout"
import BookSectionDiario from "../../components/home/book/BookSectionDiario"
import BookSectionSendero from "../../components/home/book/BookSectionSendero"
import Prueba from "../../components/home/book/Prueba"


function BookHome (){

    return(
        <Layout>
            <BookHomeInfo/>
            <BookSectionDiario/>
            <BookSectionArte/>
            <Prueba/>
            <BookSectionSendero/>
\           

        </Layout>
    )

}
export default BookHome
