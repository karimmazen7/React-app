import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
import { HelmetProvider } from "react-helmet-async";
const Javascript = () => {
  return (
    <>
      <HelmetProvider>
        <title>js Page</title>
      </HelmetProvider>
      <Header />
      <Maincontent content="javascript" />
      <Footer />
    </>
  );
};

export default Javascript;
