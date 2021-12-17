import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import FindTutor from "./pages/FindTutor";
import FindStudent from "./pages/FindStudent";
import PricePlan from "./pages/PricePlan";
import Quran from "./pages/Quran";
import Qaida from "./pages/Qaida";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import PrivacyP from "./pages/PrivacyP";
import ToS from "./pages/ToS";
import Error from "./pages/Error";
import FaQ from "./pages/FaQ";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/findtutors" component={FindTutor}></Route>
        <Route path="/findtutors" component={FindStudent}></Route>
        <Route path="/pricingplan" component={PricePlan}></Route>
        <Route path="/quran" component={Quran}></Route>
        <Route path="/qaida" component={Qaida}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/service" component={Service}></Route>
        <Route path="/privacypolicy" component={PrivacyP}></Route>
        <Route path="/tos" component={ToS}></Route>
        <Route path="/faqs" component={FaQ}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
