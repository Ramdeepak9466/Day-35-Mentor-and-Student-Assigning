import { useEffect, useState } from "react";
import { getAllStus } from "./../API/axios.js";
import { NavLink } from "react-router-dom";

const Students = () => {
  const [data, setData] = useState([]);

  //Function to get all students from API
  const stu = async () => {
    const getStus = await getAllStus();
    setData([getStus]);
  };

  useEffect(() => {
    stu();
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-5 pt-5 row">
          <NavLink
            className="row btn btn-success"
            style={{ width: "20%" }}
            to="/addstudent"
          >
            Add Student
          </NavLink>
        </div>
        <div className="table-responsive">
        <table
          className="table table-striped mt-5 pt-5"
          style={{ width: "90%" }}
        >
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Degree</th>
              <th scope="col">Joinee</th>
              <th scope="col">MentorID</th>
              <th scope="col">PreviousMentor</th>
            </tr>
          </thead>
          {data.map((stu) =>
            stu.students.map((val, ind) => (
              <tbody key={val.StudentID}>
                <tr>
                  <th scope="row">{ind + 1}</th>
                  <td>{val.StudentID}</td>
                  <td>{val.Name}</td>
                  <td>{val.Phone}</td>
                  <td>{val.Degree}</td>
                  <td>{val.Joinee}</td>
                  <td>{val.MentorID}</td>
                  <td>{val.PreviousMentor}</td>
                  <td>
                    {val.MentorID !== null && (
                      <NavLink
                        className="row btn btn-primary"
                        style={{ width: "100%" }}
                        to={`/changementor/${val.StudentID}`}
                      >
                        Change Mentor
                      </NavLink>
                    )}
                  </td>
                  <td>
                    {val.PreviousMentor !== "" && (
                      <NavLink
                        className="row btn btn-primary"
                        style={{ width: "100%" }}
                        to={`/previousmentor/${val.StudentID}`}
                      >
                        View Prev
                      </NavLink>
                    )}
                  </td>
                </tr>
              </tbody>
            ))
          )}
        </table>
        </div>
      </div>
    </>
  );
};

export default Students;
