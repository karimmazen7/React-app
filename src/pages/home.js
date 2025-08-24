import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import {  HelmetProvider } from 'react-helmet-async';
const Home = () => {
  return (
      <>
       <HelmetProvider>
              <title>Home Page</title>
            </HelmetProvider>
        <Header />
       <Maincontent content="home" />
      <Footer />
    </>
  );
}

export default Home;
