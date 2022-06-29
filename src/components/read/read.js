import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [apidata, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62b9b334ff109cd1dc98cb9b.mockapi.io/api/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  const setData = (id, fName, lName) => {
    console.log(id);
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", fName);
    localStorage.setItem("lastName", lName);
  };

  const getData = () => {
    axios
      .get(`https://62b9b334ff109cd1dc98cb9b.mockapi.io/api/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62b9b334ff109cd1dc98cb9b.mockapi.io/api/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {apidata.map((dat) => {
            return (
              <tr key={dat.id}>
                <td>{dat.id}</td>
                <td>{dat.fname}</td>
                <td>{dat.lname}</td>
                <td>
                  <Link to="/update">
                    <Button
                      onClick={() => setData(dat.id, dat.fname, dat.lname)}
                    >
                      Update
                    </Button>
                  </Link>
                </td>
                <td>
                  <Button onClick={() => onDelete(dat.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <Link to="/create">
          <button class="btn btn-primary" type="submit" className="sub">
            Create
          </button>
        </Link>
      </Table>
    </div>
  );
}

export default Read;
