import React from 'react';
import Card from './card';
import { UserContext } from './page';

function Login(){
  const [show, setShow]         = React.useState(true);
  const [logInStatus, setLogInStatus]     = React.useState('');
  const [valid, setValid]       = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, errorMsg, value){

    function showError(errorMsg, showErrorMsg) {
    if (showErrorMsg === 1){
      setStatus('Error: ' + errorMsg);
      setTimeout(() => setStatus(''), 3000);
    }
  }
    

  let errorMsg = '';

  if (field === 'email'){
    errorMsg = 'Must enter a valid Email';
      if(value === ''){
        setValid(false);
        showError(errorMsg, showErrorMsg);
        return false;
      } else if
        (field === 'password') {
          errorMsg = 'Enter a valid password. Password must contain 8+ characters';
          if (value.length < 8){
            setValid(false);
            showError(errorMsg, showErrorMsg);
            return false;
          } else if (value.length >= 8) {
        }
      }
      return true;
      }
  }

  function handle(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    setShow(false);
  }    

  return (
    <>
      <h1>Login</h1>
      <Card
        txtcolor="black"
        header="Log in to view your Account"
        title="Enter Email and Password to Log In"
        status={logInStatus}
        body={show ? (
          <>
          <label>Email Address</label><br/>
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            onChange={e => validate('email', e.currentTarget.value, 1)}/><br/>
          <label>Enter Password</label><br/>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
            onChange={e => validate('password', e.currentTarget.value, 1)}/><br/>
          <input
            type="submit"
            className={`btn ${valid ? "btn-primary" : "btn-light text-black-50"}`}
            id="submit-button"
            value="Log In"
            onClick={handle}
        />
        </>
        ):(
            <> 
            <h3 className="text-success mb-4">You have succesfully Logged In.</h3>
            </>
        )}
      />
    </>
  )  
}
