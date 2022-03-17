import './App.css';
// Importing components
import Header from "./components/Header"
import Routers from "./components/Routers"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}
