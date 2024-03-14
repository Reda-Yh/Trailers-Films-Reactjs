import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header.jsx'
import Banner from './pages/Banner/Banner.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';
import Main from './components/main/main.jsx';
import Footer from './components/Footer/Footer.jsx';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [scroll, setScroll] = useState(0);
  
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
  });
  return () => {
    window.removeEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  };
}, [scroll]);
  return (
    <div className="App">
      <Header scroll={scroll}/>
      <Banner />
      <Main />
      <Footer />
      <BackToTopBtn scroll={scroll}/>
    </div>
  );
}

export default App;
