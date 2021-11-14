import React, { Fragment } from "react";
import Micomponente from "./Components/Componente";
import Mifor from "./Components/For";
import Miif from "./Components/If";

function App() {
  return (
    <Fragment>
      <h1>segunda practica 2 </h1>
      <Micomponente />
      <Micomponente />
      <Micomponente />
      <p>____________________</p>
      <Miif/>
      <p>____________________</p>
      <Mifor/>
    </Fragment>
  );
}

export default App;
