import { useContext } from "react";
import { Card } from "react-bootstrap";
import UserContext from "./context";
export default function AllData() {
  const alldata = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(alldata.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  function renderTableData() {
    return alldata.users.map((user, index) => {
      const { name, email, password, balance } = user; //destructuring
      return (
        <tr>
          <td>{name}</td>

          <td>{email}</td>

          <td>{password}</td>

          <td>{balance}</td>
        </tr>
      );
    });
  }
  return (
    <Card>
      <div className="colfont">All Transactions</div>
      <Card.Body class="transaction">
        {" "}
        {
          <>
            <br />
            <table id="users">
              <tr class="user">{renderTableHeader()} </tr>
              {renderTableData()}
            </table>
            <br />
          </>
        }
      </Card.Body>
    </Card>
  );
}
