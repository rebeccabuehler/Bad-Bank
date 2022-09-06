function Spa() {
    return(
        <HashRouter>
        <Navbar/>
        <UserContext.Provider value={{users: [{name: 'Rebecca', email:'rebecca.buehler02@gmail.com', password:'secret2022!', balance:100}]}}>
        <Route path="/" exact component={Home} />
        <Route path="/CreateAccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/balance/" component={Balance} />
        <Route path="/alldata/" component={AllData} />
        </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)