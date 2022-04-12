import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Experts from './Pages/Home/Experts/Experts';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import Register from './Pages/LogIn/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
