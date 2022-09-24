function Deposit() {
    const ctx = React.useContext(UserContext);
    return(
        <h1>
            Deposit <br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}

//for deposit and withdraw for reference look to week 15 atm exercise
// const Deposit = ({ onChange }) => {
//     return (
//       <label className="label huge">
//         Deposit:
//         <input type="number" onChange={onChange}></input>
//         <input type="submit"></input>
//       </label>
//     );
//   };
  
//   const Account = () => {
//     const [accountState, setAccountState] = React.useState(0);
//     var deposit = 0;
//     const handleChange = event => {
//       console.log(`handleChange ${event.target.value}`);
//       deposit = Number(event.target.value);
//     };
//     const handleSubmit = event => {
//       let newTotal = accountState + deposit;
//       alert(`Account total = ${newTotal}`);
//       setAccountState(newTotal);
//       event.preventDefault();
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <h2>Account Balance {accountState}</h2>
//         <Deposit onChange={handleChange}> Deposit</Deposit>
//       </form>
//     );
//   };