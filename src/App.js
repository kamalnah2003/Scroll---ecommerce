import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Forgotpassword from "./pages/Forgotpassword";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Header from "./components/Header";


function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/sign-in" element ={<Signin/>}/>
      <Route path="/Profile" element ={<Profile/>}/>
      <Route path="/Forgotpassword" element ={<Forgotpassword/>}/>
      <Route path="/Offers" element ={<Offers/>}/>
      <Route path="/sign-up" element ={<Signup/>}/>
      
    </Routes>
   </Router>
  );
}
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;
