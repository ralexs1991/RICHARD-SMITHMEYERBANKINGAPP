const HashRouter  = ReactRouterDOM.HashRouter;

function Spa (){
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
      async function getData() {
          const response = await fetch('./users.json');
          const json     = await response.json();
          setData(json);
          setLoaded(true);
      }
      getData();
  },[])

  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route exact path="/Home/" component={Home} />
            <Route exact path="/CreateAccount/" component={CreateAccount} />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/deposit/" component={Deposit} />
            <Route exact path="/withdraw/" component={Withdraw} />
            {}
            <Route exact path="/balance/" component={Balance} />
            <Route exact path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Spa/>);
