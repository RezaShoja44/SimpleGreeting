import React from "react";
import "./App.scss";
import ReactDOM from "react-dom";

function App() {
  let element;
  const user = {
    firstName: prompt("Your First Name?", "Reza"),
    lastName: prompt("Your Last Name?", "Shoja"),
    age: prompt("Your Age?", "18")
  };

  function userGreeting(person) {
    element =
      person.age > 18 ? person.firstName + " " + person.lastName : "Stranger";
  }
  element = <h1 className="App">Hello, {userGreeting(user) || element}</h1>;
  return ReactDOM.render(element, document.getElementById("root"));
}

export default App;
