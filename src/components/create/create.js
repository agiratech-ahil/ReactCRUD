import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Create() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const sendAPIdetails = () => {
    axios.post(`https://62b9b334ff109cd1dc98cb9b.mockapi.io/api/crud`, {
      fname,
      lname,
    });
  };
  return (
    <div className="fcontainer">
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="fname"
        onChange={(e) => setFname(e.target.value)}
      ></input>
      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lname"
        onChange={(e) => setLname(e.target.value)}
      ></input>
      <button type="submit" className="sub" onClick={sendAPIdetails}>
        Submit
      </button>
      <Link to="/read">
        <button className="btn btn-primary" type="submit">
          Home
        </button>
      </Link>
    </div>
  );
}

export default Create;
