function Deposit(name, email, password, log, amount) {
  let user = ctx.users.filter((user) => user.loged === true);
  if (user.length === 0) {
    alert('Please Login first');
    window.location.assign('#/login/');
  } else {
    let index = ctx.users.indexOf(user[0]);
    if (amount > 0) {
      setDepositError(false);
      ctx.users[index].balance += Number(amount);
    } else {
      setDepositError(true);

      return false;
    }
    return true;
  }

  console.log('user', user);
}

balance = parseFloat(balance).toFixed(2);

function validate (field, value) {
  console.log( ' type:' + typeof value);
  console.log('String:' + value);
}

function handleDeposit(){
  if (!validate ( 'amount', amount, 1)) return;
  if (ctx.users[0]) {
    let newBalance = parseFloat(balance) + parseFloat(amount);
    newBalance = newBalance.toFixed(2);
    ctx.users[0].balance = Number(newBalance);

  }
}



function clearForm (){
  setAmount(' ');
} 

  return (
    <>
      <h1>Deposit Funds</h1>
      <Card
        txtcolor= "black"
        header={`Current balance: $${balance}`}
        status= {status}
        body={show ? (
          <>
            <label> Deposit Amount:</label><br/>
            $<input
              type= "input"
              id= "amount"
              placeholder='0'
              value={amount}
              onChange={e => validate('amount', e.currentTarget.value, 1)}
              style={{maxwidth: '300px'}} /> <br/>
            <input
              type={submit}
              className={`btn ${isValid ? "btn-primary": "btn-light text-black-50"}`}
              id='submit-button'
              value={Deposit}
              onClick={handleDeposit} />
            </>
        ):( 
          <>
            <h5 className='text-success mb-4'> Your ${parseFloat(amount).toFixed(2)} have been successfully submitted</h5>
            <button
              type='submit'
              className="btn btn-primary"
              onClick={clearForm}> New Deposit 
            </button>
            </>
        )}
      />    
    </>
  )

