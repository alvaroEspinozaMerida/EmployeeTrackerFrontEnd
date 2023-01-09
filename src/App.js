import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateEmployee from "./components/CreateEmployee";

import ViewEmployee from "./components/ViewEmployee";
function App() {
  return (
      <div>
          <Header/>
          <Routes>
              <Route exact path = "/" index element = {<ListEmployeeComponent/>}></Route>
              <Route exact path = "/employees" element = {<ListEmployeeComponent/>}></Route>
              <Route exact path = "/add-employee/:id" element = {<CreateEmployee/>}></Route>
              <Route exact path = "/view-employee/:id" element = {<ViewEmployee/>}></Route>
          </Routes>
          <Footer/>

      </div>
  );
}

export default App;
