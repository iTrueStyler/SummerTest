import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Header from "./header/Header";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Main from "./pages/mainPage/Main";
import UserPage from "./pages/userPage/UserPage";


function App() {
  const isFetchingError = useSelector((state) => state.repos.isFetchingError);




  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Main} />
      <Route path='/user' component={isFetchingError ? ErrorPage : UserPage} />
      {/* <Route path='/error' component={ErrorPage} /> */}
      <Redirect to="/" />
    </BrowserRouter>
  );
}

export default App;
