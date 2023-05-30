import React from 'react';

import NavBar from '../components/navBar';
import ProjectExperienceShowcase from '../components/projectExperienceShowcase';
import AboutMeContainner from '../components/aboutMe';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';

/**
 * It has a page with the showcase, about me, contact me container.
 * All pages have a navigation bar and footer.
 * 
 * @returns Project Showcase Page 
 */
function ProjectShowcasePage() {
  return (
    <div className="ProjectShowcasePage">
      <NavBar />
      <ProjectExperienceShowcase />
      <AboutMeContainner />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default ProjectShowcasePage;