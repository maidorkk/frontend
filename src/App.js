import React, { useState } from 'react';
import LoginForm from './components/LoginForm';



function App() {

 const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
 }

 const [user, setUser] = useState({name: "", email: ""});
 const [error, setError] = useState("");

 const Login = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password){
        console.log("Logged in");
        setUser({
            name: details.name,
            email: details.email
        });
    }else{
        console.log("Details do not match");
        setError("Details do not match");
    }
 }

 const Logout = () => {
    console.log("Logout");
    setUser({name: "", email: ""});
 }

  return (
    <div className="App">{
            (user.email !== "") ? (
            <div className= "Welcome">
                <h1> Welcome, <span>{user.name}!</span></h1>

                    <button class = "adminbtn">Admin</button>
                    <button class= "cashierbtn">Cashier</button>
                    <button class= "logoutbtn" onClick={Logout}>Logout</button>

             </div>
            ): (

            <div className = "LogIn">
            <LoginForm Login={Login} error={error}/>
            </div>
            )}

    </div>
  );
}

export default App;
