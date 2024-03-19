import React, { useState } from 'react';
import styled from 'styled-components';
import TipbarHeader from './components/TipbarHeader';
import Header from './modules/Header';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import GridPartners from './components/GridPartners';
import Carousel from './components/Carousel';
import FeaturedSection from './components/FeaturedSection';
import Newsletter from './modules/Newsletter';
import Footer from './modules/Footer';
import Modal from './components/Modal';

const App = () => {

    const [showModal, setShowModal] = useState(true); // Inicialmente, o modal será exibido ao carregar a página

    const handleCloseModal = () => {
      setShowModal(false); // Fechar o modal definindo showModal como false
    };

    return (
        <AppContainer>
            <TipbarHeader />
            <Header />
            <Banner />
            <Benefits />
            <GridPartners />
            <Carousel />
            <FeaturedSection />
            <Newsletter />
            <Footer />
            {showModal && <Modal onClose={handleCloseModal} />}
        </AppContainer>
    );
};

const AppContainer = styled.div`
    /* Estilos para o container principal do App */
`;

export default App;
