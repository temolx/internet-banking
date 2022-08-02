import './App.css';
import './Style.css';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Overview />
    </div>
  );
}

export default App;
