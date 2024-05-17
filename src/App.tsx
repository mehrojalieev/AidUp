import './App.scss';
import AnonouncementBar from './components/announcement-bar/AnonouncementBar';
import Footer from './layout/footer/Footer';
import Nav from './layout/nav/Nav';
import RouteController from './routes/RouteController';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <AnonouncementBar/>
      <Nav />
      <RouteController />
      <Footer />
      <ToastContainer/>
    </div>
  );
}

export default App;