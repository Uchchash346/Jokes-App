import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import JokesCategory from './components/JokesCategory/JokesCategory';
import JokesDescription from './components/JokesDescription/JokesDescription';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<JokesCategory />} />
        <Route path="/:id" element={<JokesDescription />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;