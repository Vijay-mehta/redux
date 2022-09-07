import './App.css';
import MainRout from './routers/MainRout';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>      <MainRout/></Router>

    </>
  );
}

export default App;
