import './App.css';
import WeatherSearch from "./WeatherSearch"
import Github from "./Github"
function App() {
  return (
    <div className="App">
      
      <WeatherSearch defaultCity="Cairo"/>
      <Github />
      

    </div>
  );
}

export default App;
