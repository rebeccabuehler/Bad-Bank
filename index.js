function Spa() {
    return(
        <>
        <h1>Welcome to Bad Bank</h1>
        <Navbar/>
        </>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)