import { getMentorToChange, assignMentor } from "./../API/axios.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChangeMentor = () => {
  //Using Path Params StudentID is retreived and sent to API
  const { StudentID } = useParams();
  const [mentList, setMentList] = useState([]);
  //Function to Change Mentor for a Particular Student
  const stuID = async () => {
    const listMentors = await getMentorToChange(StudentID);
    setMentList([listMentors]);
  };
  //Onclick function to change Mentor In DB MentorID must be empty for that student
  const mentID = async (id) => {
    const assign = await assignMentor(StudentID, id);
    alert(assign.msg);
  };

  useEffect(() => {
    stuID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-3 pt-3 row">
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
                  <th scope="col">MentorID</th>
                  <th scope="col">Proficiency</th>
                  <th scope="col">Assigned Students</th>
                </tr>
              </thead>
              {mentList.map((men) =>
                men.availableMentors.map((val, ind) => (
                  <tbody key={val.MentorID}>
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td>{val.MentorID}</td>
                      <td>{val.Name}</td>
                      <td>{val.Email}</td>
                      <td>{val.Experience}</td>
                      <td>{val.Teaching_Exp}</td>
                      <td>{val.MentorID}</td>
                      <td>{val.Mentor_Proficiency}</td>
                      <td>{val.Assigned_Students.length}</td>
                      <td>
                        <button
                          className="btn btn-dark"
                          style={{ width: "100%" }}
                          onClick={() => mentID(val.MentorID)}
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

export default ChangeMentor;
