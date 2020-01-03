
import React from "react";
import Jumbotron from "./components/Jumbotron";
import MainGameContainer from "./components/MainGameContainer";
import "./App.css";
import Header from "./components/Header";

 

const App = () => (
    <div className="container-fluid mainContainer">
        <Header />
        <Jumbotron />
        <MainGameContainer />
    </div>
); 

export default App;
