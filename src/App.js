import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Advertising from './pages/Advertising';
import ContentCreation from './pages/ContentCreation';
import DigitalMarketing from './pages/DigitalMarketing';
import EventPhotography from './pages/EventPhotography.js';
import ModelPhotography from './pages/ModelPhotography.js';
import ProductPhotography from './pages/ProductPhotography.js';
import TechnicalStrategy from './pages/TechnicalStrategy';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path='/advertising' element={<Advertising heading ="Advertising and Advertisements"></Advertising>} />
    <Route path='/content-creation' element={<ContentCreation heading ="Content Creation and Design"></ContentCreation>} />
    <Route path='/digital-marketing' element={<DigitalMarketing heading ="Digital Marketing"></DigitalMarketing>} />
    <Route path='/event-photography' element={<EventPhotography heading ="Event Photography"></EventPhotography>} />
    <Route path='/model-photography' element={<ModelPhotography heading ="Model Photography"></ModelPhotography>} />
    <Route path='/product-photography' element={<ProductPhotography heading ="Product Photography"></ProductPhotography>} />
    <Route path='/technical-strategy' element={<TechnicalStrategy heading ="Technical strategy plan"></TechnicalStrategy>} />
   </Routes>
  <Footer></Footer>
</BrowserRouter>
    </div>
  );
}

export default App;
