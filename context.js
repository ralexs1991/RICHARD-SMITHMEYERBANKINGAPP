const UserContext = React.createContext(null);

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

