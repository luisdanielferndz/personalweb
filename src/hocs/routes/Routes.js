import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from "../../components/others/ScrollToTop";
import Home from '../../containers/pages/Home';
import Error404 from '../../containers/errors/Error404';
import Developer from '../../containers/pages/Developer';

function AnimatedRoutes() {    
    const location = useLocation();
    return (
        <>
            {/* Este componente reestablece la posición del scroll al inicio de la página */}
            <ScrollToTop />
                <Routes location={location} key={location.pathname}>
                <Route path="*" element={<Error404/>}/>
    
                <Route path="/" element={<Home/>}/>
                <Route path="/inicio" element={<Home/>}/>
                <Route path="/developer" element={<Developer/>}/>

               
          </Routes>
        </>
    );
}

export default AnimatedRoutes;
