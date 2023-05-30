import React from 'react';
import './App.css';

import NavBar from './components/navBar';
import WelcomeContainer from './components/welcomeContainer';
import AboutMeContainner from './components/aboutMe';
import ContactForm from './components/contactForm';
import Footer from './components/footer';

/**
 * It has a page with the welcome, about me, contact me container.
 * All pages have a navigation bar and footer.
 * 
 * @returns Project Showcase Page 
 */
function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeContainer />
      <AboutMeContainner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
