import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="gap"></div>
      <HomePage />
    </div>
  );
}

export default App;
