import './App.css';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import AvgRating from './components/AvgRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVistors';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Reviews />
      <AvgRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
