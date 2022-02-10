import logo from './logo.svg';
import './App.css';
import Menu from "./components/menu.jsx";
import Visualizer from './components/visualizer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Visualizer />
      </header>
    </div>
  );
}

export default App;
