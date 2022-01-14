import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom";
import Header from 'home/Header'

import Footer from 'home/Footer'

import SafeComponent from "./SafeComponent";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    
    
    <div className="p-3">This is the body</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
