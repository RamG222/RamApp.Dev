import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import MyWork from './components/MyWork';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      {/* <MyWork/> */}
      <Contact/>
    </div>
  );
}

export default App;
