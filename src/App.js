import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Navbar from './components/NavBar';
import Home from './components/Home';
import AccountProfile from './components/AccountProfile';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/account/profile" element={<AccountProfile/>} />
      </Routes>
    </Fragment>
  );
}

export default App;
