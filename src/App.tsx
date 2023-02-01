import './App.scss';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="wrapper">

      <Routes>
        <Route 
          path=''
          element={<Home/>}
        />
        <Route 
          path='signIn'
          element={<SignIn/>}
        />
        <Route 
          path='signUp'
          element={<SignUp/>}
        />
      </Routes>
      
    </div>

  );
}

export default App;
