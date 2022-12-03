import "./newUser.css";
import { register } from "../../../redux_2/apiCalls";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../../components/Backend/sidebar/Sidebar";


export default function NewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [isAdmin, setisAdmin] = useState("");

  const dispatch = useDispatch();
  const { isFetching ,error } = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { name,lastName,username,email, password,isAdmin });
  };
  

  return (
    <>
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="john" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>LastName</label>
          <input type="text" placeholder="Smith" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="john Smith" onChange={(e) => setUsername(e.target.value)}/>
        </div>
      
        <div className="newUserItem">
          <label>Admin</label>
          <select className="newUserSelect" onChange={(e) => setisAdmin(e.target.value)}  >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form>
    </div>
    </>
  );
}
