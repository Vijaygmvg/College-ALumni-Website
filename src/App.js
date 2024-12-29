// Import the image file
 // Import your CSS file
import SearchBar from './SearchBar';
import Navigation from './components/Navigation'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import LoginAdmin from './components/Loginadmin'
import Signup from './components/Signupwithemail'
import LoginAlumni from './components/Loginalumni'
import Reegister from './components/Reegistration'
import SearchAlumni  from './components/SearchAlumni';
import About from './components/About';
import AboutAlumniAssociation from './components/AboutAlumniAssociation';
import AlumniProfile from './components/AlumniProfile';
import Admin from './components/Admin'
import AdminSearchAlumni from './components/AdminSearch';
import UploadNews from './components/UploadNews';
import DisplayNews from './components/DisplayNews';
import AdminDisplayNews from './components/AdminNews';
import AdminDisplayRequest from './components/AdminDisplayRequest';
import DisplayMyprofile from './components/DisplayMyprofile';
import Signupwithemail from './components/Signupwithemail';

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    
  
   <Routes>

      
      <Route exact path="/"  element={<Home/>} ></Route>
      <Route exact path="/loginAdmin" element={<LoginAdmin/>} ></Route>
      <Route exact path="/signup" element={<Signup/>} ></Route>
      <Route exact path="/loginAlumni" element={<LoginAlumni/>} ></Route>
      <Route exact path="/register" element={<Signupwithemail/>} ></Route>
      <Route exact path="/registration" element={<Reegister/>} ></Route>
      <Route exact path="/searchalumni" element={<SearchAlumni/>} ></Route>
      <Route exact path="/about" element={<About/>} ></Route>
      <Route exact path="/association" element={<AboutAlumniAssociation/>} ></Route>
      <Route exact path="/profile" element={<AlumniProfile/>} ></Route>
      <Route exact path="/adminsearchalumni" element={<AdminSearchAlumni/>} ></Route>
      <Route exact path="/addnews" element={<UploadNews/>} ></Route>
      <Route exact path="/news" element={<DisplayNews/>} ></Route>
      <Route exact path="/adminnews" element={<AdminDisplayNews/>} ></Route>
      <Route exact path='/adminActivity' element={<Admin/>} ></Route>
      <Route exact path='/adminrequest' element={<AdminDisplayRequest/>} ></Route>
      <Route exact path='/myprofile' element={<DisplayMyprofile/>} ></Route>
      
      


    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
