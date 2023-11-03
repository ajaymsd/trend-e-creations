import Header from '../components/Header/Header';
import '../App.css';
import About from '../components/About/About';
import Services from '../components/services/services';
import Contact from '../components/contact/contact';

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}

export default Home;