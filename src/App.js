import SimpleMap from './components/simple-map';
import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <div className="App" style={{height:"100vh"}}>
      <SimpleMap />
    </div>
  );
}

export default App;
