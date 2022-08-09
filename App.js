import React from "react";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./my-app/MainPage";
function App(title){


   return(
       <BrowserRouter>
     <div className = "container">
         <MainPage/>
       
     </div>
       </BrowserRouter>

   );
}

export default App;









