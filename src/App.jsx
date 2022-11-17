import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;
