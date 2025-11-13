import BookHomeInfo from "../../components/home/book/BookHomeInfo"
import BookSectionArte from "../../components/home/book/BookSectionArte"
import Layout from "../../hocs/layouts/Layout"
import BookSectionDiario from "../../components/home/book/BookSectionDiario"
import BookSectionSendero from "../../components/home/book/BookSectionSendero"
import BookAnuncio from "../../components/home/book/BookAnuncio"


function BookHome (){

    return(
        <Layout>
            <BookHomeInfo/>
            <BookSectionDiario/>
            <BookSectionArte/>
            <BookAnuncio/>
            <BookSectionSendero/>   
        </Layout>
    )

}
export default BookHome
