import { useParams } from "react-router-dom";
import { displayStudents } from "./../API/axios.js";
import { useEffect, useState } from "react";

const DisplayStudents = () => {
  //Using Path Params MentorID is retreived and sent to API
  const { MentorID } = useParams();
  const [stuList, setStuList] = useState([]);
  //Function to display students for Particular Mentor ID
  const assignStu = async () => {
    const assign = await displayStudents(MentorID);
    setStuList([assign]);
  };

  useEffect(() => {
    assignStu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-3 pt-3">
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
              {stuList.map((stu) =>
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
                    </tr>
                  </tbody>
                ))
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayStudents;
