import "./UserForm.css";

export default function UserForm() {
  const addUser = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <input type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}
