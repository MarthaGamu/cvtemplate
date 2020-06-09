import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle  from'./components/styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle>
      <Header/>
      <Portfolio/>
      <Skill/>
      <Contact/>
      <Footer/>
      </GlobalStyle>
    </div>
  );
}

export default App;
