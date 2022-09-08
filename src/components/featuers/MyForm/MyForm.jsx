import "./MyForm.css";
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";

import { addUser } from "../../../store/actions/user-action";


const mapDispatchToProps = (dispatch) => ({
  addNewUser: (userObj) => dispatch(addUser(userObj)),
});
function MyForm({users,addNewUser}) {
  
  const {fName,lname,age,email} = users[0]
  const [user, setUser] = useState({});
  const changeInput = (e) => {
    user[e.target.name] = e.target.value;
  };
  return (
    <div className="my-form">
      <h1>My Form</h1>
      <label htmlFor="">first name</label>
      <input name="fName" value={fName} onChange={changeInput} type="text" />
    <br />
    <br />
      <label htmlFor="">last name</label>
      <input name="lName"value={lname} onChange={changeInput} type="text" />
      <br />
    <br />

      <label htmlFor="">age</label>
      <input name="age"value={age} onChange={changeInput} type="number" />
      <br />
    <br />
      <label htmlFor="">email</label>
      <input name="email"value={email} onChange={changeInput} type="email" />
      <br />
    <br />
      <button onClick={() => addNewUser(user)}>add</button>
    </div>
  );
}
export default connect(null, mapDispatchToProps)(MyForm);
