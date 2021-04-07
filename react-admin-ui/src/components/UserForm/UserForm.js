import "./UserForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function UserForm() {
  const addUser = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={addUser}>
        <TextField label="First Name" variant="outlined" size="small" />
        <TextField label="Last Name" variant="outlined" size="small" />
        <TextField label="User Name" variant="outlined" size="small" />
        <Button variant="contained" color="primary" size="small">
          Add
        </Button>
      </form>
    </div>
  );
}
