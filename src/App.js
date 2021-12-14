import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import AccountProfile from './components/AccountProfile';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Container>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/account/profile" element={<AccountProfile/>} />
      </Routes>
      </Container>
    </Fragment>
  );
}

export default App;
