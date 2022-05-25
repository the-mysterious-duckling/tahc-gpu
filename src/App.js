import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import { Toaster } from 'react-hot-toast';
import Blogs from './Pages/Blogs/Blogs';
import Error404 from './Pages/Shared/Error404';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/*' element={<Error404 />}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div >
  );
}

export default App;
