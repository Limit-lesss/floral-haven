import './App.css';
import { HomePage } from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { Route, Routes } from 'react-router-dom'
import { ShoppingPage } from './pages/shopping';
import { LoginPage } from './pages/loginpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/floral-haven' element={<HomePage/>}/>
        <Route path='/shop' element={<ShoppingPage/>}/>
        <Route path='/SignIn-SignUp' element={<LoginPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
library.add(fab, fas, far)