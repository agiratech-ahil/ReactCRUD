import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Update() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [ID, setID] = useState(null);
  console.log(fname);

  const sendAPIdetails = () => {
    axios.put(`https://62b9b334ff109cd1dc98cb9b.mockapi.io/api/crud/${ID}`, {
      fname,
      lname,
    });
  };

  useEffect(() => {
    setFname(localStorage.getItem("firstName"));
    setLname(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, []);
  return (
    <div className="fcontainer">
      <label htmlFor="firstname">First Name</label>
      <input
        id="firstname"
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        id="lastname"
        name="l
        name"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <Button type="submit" className="sub" onClick={sendAPIdetails}>
        Update
      </Button>
      <Link to="/read">
        <Button type="submit" className="sub">
          Home
        </Button>
      </Link>
    </div>
  );
}

export default Update;
