import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Mainsection from "./assets/components/Mainsection";
import Navbar from "./assets/components/Navbar";
import NavbarCommon from "./assets/components/NavbarCommon";
import Organictab from "./assets/components/Organictab";
import Subbar from "./assets/components/Subbar";
import Tabs from "./assets/components/Tabs";

function App() {
  return (
    <>
      <Header />
      <Subbar />
      <NavbarCommon />
      {/* <Navbar />
      <Mainsection />
      <Tabs />
      <Organictab /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
