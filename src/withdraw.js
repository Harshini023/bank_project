import { useState, useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";

export default function Deposit() {
  const alldata = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  var length = alldata.users.length;
  var Balance = alldata.users[length - 1].balance;
  const [availablebal, setAvailableBal] = useState(Balance);
  //const [show, setShow] = useState(true);

  //form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert("Please Enter a value greater than Zero");
      return false;
    }
    if (field > Balance) {
      alert("You don't have enough Balance to Withdraw");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw)) return;
    var Money = Balance - Number(withdraw);
    setAvailableBal(Money);
    alldata.users[length - 1].balance = Money;
    //setShow(false);
    alert("Successfully Withdrawed Rs:" + withdraw);
    setWithdraw(" ");
  }

  //function clearform(){
  //setDeposit("");
  //setShow(true);
  //}

  return (
    <>
      <div class="colfont">Withdraw Amount in Your Account</div>
      <form class="deposit">
        <div class="balheader">
          <h3>Balance : Rs. {availablebal}</h3>
        </div>

        <div class="heading">
          <h3>Withdraw</h3>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Amount to be Withdrawn"
            value={withdraw}
            onChange={(e) => setWithdraw(Number(e.currentTarget.value))}
          />
        </div>
        <br />
        <div>
          <center>
            <button type="submit" class="but" onClick={handleCreate}>
              Withdraw
            </button>
          </center>
        </div>
      </form>
    </>
  );
}
