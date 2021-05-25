import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Header from "./header/Header";
import Main from "./pages/mainPage/Main";
import UserPage from "./pages/userPage/UserPage";

function App() {
  const users = useSelector((state) => state.users.userItems);



  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Main} />
      <Route path='/user' component={UserPage} />
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default App;
