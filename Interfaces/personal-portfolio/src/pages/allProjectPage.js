import React from 'react';

import NavBar from '../components/navBar';
import AllProjectsGallery from '../components/AllProjectsGallery';
import AboutMeContainner from '../components/aboutMe';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

/**
 * It has a page with all projects, image gallery, about me, contact me container.
 * All pages have a navigation bar and footer.
 * 
 * @returns Project Showcase Page 
 */
function AllProjectsPage() {
  return (
    <div className="AllProjectsPage">
      <NavBar />
      <AllProjectsGallery />
      <AboutMeContainner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default AllProjectsPage;