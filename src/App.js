import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.js';
import Donors from './components/Donors/Donors.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div>
      <Header></Header>
      <Donors></Donors>
      <Footer></Footer>
    </div>
  );
}

export default App;
