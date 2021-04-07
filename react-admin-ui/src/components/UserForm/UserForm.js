import "./UserForm.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class UserForm {
  addUser = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addUser}>
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
}
