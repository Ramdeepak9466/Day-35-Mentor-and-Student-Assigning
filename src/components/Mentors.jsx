import { useEffect, useState } from "react";
import { getAllMent } from "./../API/axios.js";
import { NavLink } from "react-router-dom";

const Mentors = () => {
  const [data, setData] = useState([]);

  //Function to get all Metors from API
  const men = async () => {
    const getMent = await getAllMent();
    setData([getMent]);
  };

  useEffect(() => {
    men();
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-5 pt-5 row">
          <NavLink
            className="row btn btn-success"
            style={{ width: "20%" }}
            to="/addmentor"
          >
            Add Mentor
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
                <th scope="col">Mentor ID</th>
                <th scope="col">Mentor Name</th>
                <th scope="col">Email</th>
                <th scope="col">Experience</th>
                <th scope="col">Teaching_Exp</th>
                <th scope="col">Proficiency</th>
              </tr>
            </thead>
            {data.map((men) =>
              men.mentors.map((val, ind) => (
                <tbody key={val.StudentID}>
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.MentorID}</td>
                    <td>{val.Name}</td>
                    <td>{val.Email}</td>
                    <td>{val.Experience}</td>
                    <td>{val.Teaching_Exp}</td>
                    <td>{val.Mentor_Proficiency}</td>
                    <td>
                      {" "}
                      <NavLink
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                        to={`/assignstudent/${val.MentorID}`}
                      >
                        Assign
                      </NavLink>
                    </td>
                    <td>
                      {" "}
                      <NavLink
                        className="btn btn-primary"
                        style={{ width: "100%" }}
                        to={`/displaystudents/${val.MentorID}`}
                      >
                        View
                      </NavLink>
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

export default Mentors;
