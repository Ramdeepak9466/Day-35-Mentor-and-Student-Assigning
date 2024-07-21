import { useParams } from "react-router-dom";
import { prevMentor } from "./../API/axios.js";
import { useEffect, useState } from "react";

const PreviousMentor = () => {
  //Getting StudentID from Path Params
  const { StudentID } = useParams();
  const [data, setData] = useState([]);

  //Function to get PreviousMentor from API
  const viewPrev = async () => {
    const view = await prevMentor(StudentID);
    setData([view]);
  };

  useEffect(() => {
    viewPrev();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="mt-5 pt-5 row">
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
              {data.map((men, ind) => (
                <tbody key={men.mentDetails.MentorID}>
                  <tr>
                    <th scope="row">{ind + 1}</th>
                    <td>{men.mentDetails.MentorID}</td>
                    <td>{men.mentDetails.Name}</td>
                    <td>{men.mentDetails.Email}</td>
                    <td>{men.mentDetails.Experience}</td>
                    <td>{men.mentDetails.Teaching_Exp}</td>
                    <td>{men.mentDetails.Mentor_Proficiency}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousMentor;
