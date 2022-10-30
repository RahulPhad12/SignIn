import Navbar from '../src/components/navbar'
import Hero from'../src/components/main';
import About from '../src/components/about'
import Footer from '../src/components/footer'
import { Routes,Route} from 'react-router-dom'
import Login from '../src/components/login'
import Sign from '../src/components/signin'

import './styles/login.css';
import './styles/signin.css'
import './styles/navbar.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='sign' element={<Sign/>} />
      </Routes> <br />
      <Hero/>
      <About/>
      <Footer/>
     
    </div>
  );
}

export default App;
