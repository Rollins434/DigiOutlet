import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes,Route } from 'react-router';
import { Footer } from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen/HomeScreen';


function App() {
  return (
    <>
    <Header/>
    <main className="py-3">
    <Container>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
      </Routes>
      
    </Container>

    </main>
    <Footer/>
    </>
  )
}

export default App;
