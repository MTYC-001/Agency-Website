import Header from './components/Header';
import BrandingSlide from './components/BrandingSlide';
import Slider from './components/BrandSlider';
import Cursor from './components/Cusor'
import Work from './components/Work'
import './App.css';

function App() {
  return (
   <>
    <Cursor/>
    <div className="App">
      
      <Header/>
      <BrandingSlide/>
      <Slider/>
      <Work/>
    </div>
  </> 
  );
}

export default App;
