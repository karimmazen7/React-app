import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import {  HelmetProvider } from 'react-helmet-async';
const Html = () => {
  return (
      <>
       <HelmetProvider>
              <title>html Page</title>
            </HelmetProvider>
      <Header />
      <Maincontent content="html" />
      <Footer />
    </>
  );
}

export default Html;
