import { useEffect, useState } from "react";
import { addStudent } from "./../API/axios.js";

const AddStudent = () => {
  //State to render form data
  const [students, setStudents] = useState([]);

  //Intial form data and will replace to intial value in submit action
  const intialForm = {
    Name: "",
    Phone: "",
    Degree: "",
    PreviousMentor: "",
    MentorID: null,
  };
  //State to handlechange the form data
  const [formData, setFormData] = useState(intialForm);
  //Handle Change Function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  //Async Function to Add student and fromdata is passed to the API
  const add = async () => {
    const success = await addStudent(students);
    alert(success.msg);
  };

  useEffect(() => {
    setStudents(formData);
  }, [formData]);

  //Handle Submit Function to process form data
  const handleSubmit = (e) => {
    e.preventDefault();
    add();
    setFormData(intialForm);
  };

  return (
    <div className="container">
      <div className="mt-5 pt-5" style={{ width: "75%" }}>
        <form>
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Name"
                value={formData.Name}
                type="text"
                className="form-control"
                id="inputName"
                placeholder="Student Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">
              Phone Number
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Phone"
                value={formData.Phone}
                type="tel"
                className="form-control"
                id="inputPhone"
                placeholder="Student Phone Number"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEdu" className="col-sm-2 col-form-label">
              Degree
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Degree"
                value={formData.Degree}
                type="text"
                className="form-control"
                id="inputEdu"
                placeholder="B.com , B.E,CSE ...."
              />
            </div>
          </div>
          <label htmlFor="inputJoinee" className="col-sm-2 col-form-label">
            Joinee
          </label>
          <select
            key={formData.Joinee}
            value={formData.Joinee}
            name="Joinee"
            className="col"
            id="inputJoinee"
            onChange={handleChange}
          >
            <option value="" disabled selected>
              --Select--
            </option>
            <option value="New">New</option>
            <option value="Alumini">Alumini</option>
          </select>

          <div className="row mb-3">
            <label htmlFor="inputPrevMent" className="col-sm-2 col-form-label">
              PreviousMentor
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="PreviousMentor"
                value={formData.PreviousMentor}
                type="text"
                className="form-control"
                id="inputPrevMent"
                placeholder="If not entering Previous Mentor ID leave blank"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
