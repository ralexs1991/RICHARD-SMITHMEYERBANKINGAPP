const UserContext = React.createContext(null);
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
let ctxUser = [];

function Card(props){
  const ctx = React.useContext(UserContext);
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }


function useBankContext() {
  return React.useContext(UserContext);
}

function ContextProvider({ children }) {
  const [users, setUsers] = React.useState([
    {
      name: 'Clark Kent',
      email: 'CKent@dailyglobe.com',
      password: '12345678',
      balance: 100,
      loged: false,
    },
  ]);
  function login(user) {
    const index = users.indexOf(user);
    const usersCopy = [...users];
    usersCopy[index].loged = true;
    setUsers(usersCopy);
  }
  function logout(user) {
    const index = users.indexOf(user);
    const usersCopy = [...users];
    usersCopy[index].loged = false;
    setUsers(usersCopy);
  }
  const value = {
    users,
    login,
    logout,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

