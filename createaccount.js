function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (

    <>
    <h1> Create your Account</h1>
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
                Name
                <br/>
                  <input
                    type="input" 
                    className="form-control" 
                    id="name" 
                    placeholder="Enter Name" 
                    value={name} 
                    onChange={e => setName(e.currentTarget.value)} 
                /><br/>
                Email address
                <br/>
                  <input
                    type="input" 
                    className="form-control" 
                    id="email" 
                    placeholder="Enter Email Address" 
                    value={email} 
                    onChange={e => setEmail(e.currentTarget.value)}
                /><br/>
                Password
                <br/>
                  <input
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Create password" 
                  value={password} 
                  onChange={e => setPassword(e.currentTarget.value)}
                /><br/>
                <button 
                  type="submit" 
                  className={`btn "btn-primary" : "btn-light text-black-50"}`} 
                  onClick={handleCreate}>Create Account
                </button>
              </>
            ):(
              <>
                <h5>Congratulations! You have successfully created your Account!</h5>
                <button 
                  type="submit" 
                  className="btn btn-light" 
                  onClick={clearForm}>Add another account
                </button>
              </>
            )}
    />
    </>
  )
}

