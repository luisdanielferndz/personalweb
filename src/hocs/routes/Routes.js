import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from "../../components/others/ScrollToTop";
import Home from '../../containers/pages/Home';
import Error404 from '../../containers/errors/Error404';
import Developer from '../../containers/pages/Developer';
import About from '../../containers/pages/About';
import Contact from '../../containers/pages/Contact'; 
import BookHome from '../../containers/pages/BookHome';
import RealEstate from '../../containers/pages/RealEstate';

function AnimatedRoutes() {    
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bookhome" element={<BookHome />} />
        <Route path="/estate" element={<RealEstate />} />
      </Routes>
    </>
  );
}

export default AnimatedRoutes;
