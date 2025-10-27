
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './login';
import Home from './home';
import Registration from './registration';
import SignUp from './signUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Login/>} ></Route>
          <Route path="/home" element = {<Home/>} ></Route>
          <Route path="/login" element = {<Login/>} ></Route>
          <Route path="/registration" element = {<Registration/>} ></Route>
          <Route path="/signUp" element = {<SignUp/>} ></Route>
          {/* <Route path="/create" element = {<CreateStudent/>} ></Route>
          <Route path="/update/:id" element = {<UpdateStudent/>} ></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
