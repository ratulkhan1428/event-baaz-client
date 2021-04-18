import React from 'react';
import Contact from '../Contact/Contact';
import Events from '../Events/Events';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div style={{backgroundColor: 'lavender'}}>
            <Header></Header>
            <Services></Services>
            <Events></Events>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;