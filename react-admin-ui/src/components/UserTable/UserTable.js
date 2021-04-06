import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./UserTable.css";

function createData(username, gamesPlayed) {
  return { username, gamesPlayed };
}

const rows = [
  createData("Diego Castillo", 100),
  createData("Sebastian Castillo", 1),
];

export default function UserTable() {
  return (
    <div className="usertable">
      <TableContainer component={Paper}>
        <Table ia-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center"># Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.username}</TableCell>
                <TableCell align="center">{row.gamesPlayed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
