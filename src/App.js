import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./frontend/home.js";
 import "../src/App.css"
import AddCar from "./frontend/addCar.js";

 
const App = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/add" element ={<AddCar/>}/>
        </Routes>
        </BrowserRouter>
     );
}
 
export default App;