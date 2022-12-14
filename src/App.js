import './App.css';
import './Style.css';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import Cards from './components/Cards';
import Transfers from './components/Transfers';
import Profile from './components/Profile';
import ProfileSettings from './components/ProfileSettings';
import Greeting from './components/Greeting';
import MobileMenu from './components/MobileMenu';
import { FcMenu } from "react-icons/fc";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const[menuVisible, setMenuVisible] = useState(false);

  return (
    <Router>
      <div className="App">
          <FcMenu className='burger-menu' onClick={() => setMenuVisible(!menuVisible)} />
          <Sidebar id="side" />
          {menuVisible ? <MobileMenu setMenuVisible={setMenuVisible} menuVisible={menuVisible} /> : ''}
          <Profile />

        <Routes>
          <Route path='/' element={<Greeting />} />
          <Route path='/main' element={<Overview />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/cards' element={<Cards />} />
          <Route path='/transfers' element={<Transfers />} />
          <Route path='/profile' element={<ProfileSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
