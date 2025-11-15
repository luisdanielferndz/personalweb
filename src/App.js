import { BrowserRouter as Router } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "./store";
import AnimatedRoutes from "./hocs/routes/Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* SEO básico */}
        <title>Portafolio Personal</title>
        <meta
          name="description"
          content="Portafolio personal de Daniel Fernández. Desarrollo web, aplicaciones y marketing digital."
        />
        <meta
          name="keywords"
          content="portafolio, desarrollo web, aplicaciones, marketing digital"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.tudominio.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Portafolio Personal | Daniel Fernández" />
        <meta
          property="og:description"
          content="Desarrollador web y de aplicaciones. Servicios de software y marketing digital."
        />
        <meta property="og:url" content="https://www.tudominio.com/" />
        <meta
          property="og:image"
          content="https://www.tudominio.com/preview.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Portafolio Personal | Daniel Fernández" />
        <meta
          name="twitter:description"
          content="Desarrollador web y de aplicaciones. Servicios de software y marketing digital."
        />
        <meta
          name="twitter:image"
          content="https://www.tudominio.com/preview.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Provider store={store}>
        <Router>
          <AnimatedRoutes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
