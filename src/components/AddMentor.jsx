import { useEffect, useState } from "react";
import { addMentor } from "./../API/axios.js";

const AddMentor = () => {
  //State to render API data
  const [mentors, setMentors] = useState([]);
  //Intial form data and will replace to intial value in submit action
  const intialForm = {
    Name: "",
    Mentor_Proficiency: "",
    Email: "",
    Experience: "",
    Teaching_Exp: "",
  };
  //State to Handle changes in Form data
  const [formData, setFormData] = useState(intialForm);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Function to Add Mentor and Form data sent to API
  const add = async () => {
    const success = await addMentor(mentors);
    alert(success.msg);
  };

  useEffect(() => {
    setMentors(formData);
  }, [formData]);

  //Submit Function to handle form submission
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
                placeholder="Mentor Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputProf" className="col-sm-2 col-form-label">
              Mentor Proficiency
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Mentor_Proficiency"
                value={formData.Mentor_Proficiency}
                type="text"
                className="form-control"
                id="inputProf"
                placeholder="MERN,MEAN,PHP,etc,.."
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Email"
                value={formData.Email}
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputExp" className="col-sm-2 col-form-label">
              Experience
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Experience"
                value={formData.Experience}
                type="text"
                className="form-control"
                id="inputExp"
                placeholder="(no.of years) years"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputTeachExp" className="col-sm-2 col-form-label">
              Teaching Exp
            </label>
            <div className="col-sm-10">
              <input
                onChange={handleChange}
                name="Teaching_Exp"
                value={formData.Teaching_Exp}
                type="text"
                className="form-control"
                id="inputTeachExp"
                placeholder="(no.of years) years"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add Mentor
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMentor;
