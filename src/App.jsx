import Navbarc from "./components/Navbarc";
import Heroc from "./components/Heroc";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowIsIt from "./components/HowIsIt";
import Footer from "./components/footer";
const App = () => {

  return (
     <main className="bg-black">
      <Navbarc /> 
      <Heroc />
      <Highlights />
      <Model />
      <Features />
      <HowIsIt />
      <Footer />
     </main>
  )
}

export default App
