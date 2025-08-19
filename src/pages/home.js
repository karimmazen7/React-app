import Header from "../comp/header";
import Footer from "../comp/footer";
import Maincontent from "../comp/maincontent";
const Home = () => {
  return (
      <>
        <Header />
       <Maincontent content="home" />
      <Footer />
    </>
  );
}

export default Home;
