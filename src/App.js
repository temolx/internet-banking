import './App.css';
import './Style.css';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar id="side" />

        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/transactions' element={<Transactions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
