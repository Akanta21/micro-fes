import React, {useRef,useEffect} from "react";
import ReactDOM from "react-dom";
import Header from './Header'
import Footer from './Footer'

// import counterWrapper from "remote/counterWrapper";

import "./index.scss";

const App = () => {
  // const divRef = useRef(null);

  // useEffect(() => {
  //   counterWrapper(divRef.current)
  // }, [])
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="p-3">This is the body</div>
    <Footer />
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
