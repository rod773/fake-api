import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import { useState } from "react";

function App() {
  const [usersData, setusersData] = useState(users);

  const getUsers = () => {
    let promise = new Promise((resolve, reject) => {
      if (!users) {
        return setTimeout(() => reject(new Error("Users not found")), 250);
      }

      setTimeout(() => {
        resolve(Object.values(users));
      }, 250);
    });

    promise.then((result) => {
      setusersData(result);
      //console.log(result);
      console.log(usersData);
    });
  };

  const addUser = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Fake Api</h2>
        <button onClick={getUsers}>Get Users</button>  
        <label className="mt-3" htmlFor="firstname">
          First Name
        </label>
        <input id="firstname" type="text" />
        <label className="mt-3" htmlFor="lastname">
          Last Name
        </label>
        <input id="lasttname" type="text" />
        <div>
          <p className="mt-3">Is Developer ?</p>
          <div>
            <span className="ml-3">Yes</span>
            <input className="ml-3" type="radio" name="developer" /> 
            <span className="ml-3">No</span>
            <input className="ml-3" type="radio" name="developer" /> 
          </div>
          <button onClick={addUser}>Add User</button>  
        </div>
         
      </header>
    </div>
  );
}

export default App;
