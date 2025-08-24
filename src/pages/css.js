import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import {  HelmetProvider } from 'react-helmet-async';
const Css = () => {
  return (
    <>
       <HelmetProvider>
        <title>Css Page</title>
      </HelmetProvider>
      <Header />
      <Maincontent content="css" />
      <Footer />
    </>
  );
}

export default Css;

  
