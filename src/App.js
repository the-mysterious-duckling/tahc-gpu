import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path=''></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
