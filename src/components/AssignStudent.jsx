import { useEffect, useState } from "react";
import { getStudentToassign, assignStudent } from "./../API/axios.js";
import { useParams } from "react-router-dom";

const AssignStudent = () => {
  //MentorID received from Path Params
  const { MentorID } = useParams();
  const [stuList, setStuList] = useState([]);
  //API to get students who doesn't have Mentors
  const mentID = async () => {
    const listStudents = await getStudentToassign(MentorID);
    setStuList([listStudents]);
  };
  //Function to assign student to a mentor in onclick with POST method
  const assignStu = async (id) => {
    const assign = await assignStudent(MentorID, id);
    alert(assign.msg);
  };

  useEffect(() => {
    mentID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-5 pt-5">
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
                      <td>{val.Degree}</td>
                      <td>{val.Joinee}</td>
                      <td>{val.MentorID}</td>
                      <td>{val.PreviousMentor}</td>
                      <td>
                        <button
                          className="btn btn-dark"
                          style={{ width: "100%" }}
                          onClick={() => assignStu(val.StudentID)}
                        >
                          Assign
                        </button>
                      </td>
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
export default AssignStudent;
