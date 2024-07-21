import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Students from "./components/Students";
import Mentors from "./components/Mentors";
import AddStudent from "./components/AddStudent";
import ChangeMentor from "./components/ChangeMentor";
import AssignStudent from "./components/AssignStudent";
import DisplayStudents from "./components/DisplayStudents";
import AddMentor from "./components/AddMentor";
import PreviousMentor from "./components/PreviousMentor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route
              path="/"
              element={
                <>
                  {" "}
                  <div className="container">
                    <div className="mt-5 pt-5">
                      <h1>Hi Admin !! Greetings for the Day</h1>
                    </div>
                    <div>
                      <h2>
                        Please Follow Below Instruction to Make changes in Our
                        Database
                      </h2>
                      <ol>
                        <li>
                          Students and Mentors tab displays the Total Students
                          and Mentors in the DB
                        </li>
                        <li>
                          Adding Students and Mentors can be done on the
                          respective tabs
                        </li>
                        <li>To Assign Student to Mentor choose Mentors tab</li>
                        <li>
                          To Change Mentor for a Student choose Student tab
                        </li>
                        <li>Follow Sample DB Formats and fill accordingly</li>
                      </ol>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/students" element={<Students />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/addstudent" element={<AddStudent />} />
            <Route path="/addmentor" element={<AddMentor />} />
            <Route path="/changementor/:StudentID" element={<ChangeMentor />} />
            <Route
              path="/assignstudent/:MentorID"
              element={<AssignStudent />}
            />
            <Route
              path="/displaystudents/:MentorID"
              element={<DisplayStudents />}
            />
            <Route
              path="/previousmentor/:StudentID"
              element={<PreviousMentor />}
            />
          </Route>
          <Route
            path="*"
            element={<h1>404 Page Not Found Check Your URL</h1>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
