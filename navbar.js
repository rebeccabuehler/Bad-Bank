function Navbar() {
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Bad Bank
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/">
            Create Account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/">
            Log In
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/deposit/">
            Deposit
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/">
            Withdraw
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/balance/">
            Balance
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/alldata/">
            AllData
          </a>
        </li>
      </ul>
    </>
  );
}
