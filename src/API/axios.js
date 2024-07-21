import axios from "axios";
const baseUrl = "https://assign-mentor-rwbp.onrender.com";
const resInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    "Access-Control-Allow-Credentials": "true",
    "X-Custom-Header": "foobar",
    field: "Company Admin Page",
  },
});

const getAllStus = async () => {
  const response = await resInstance.get("/students");
  return response.data;
};

const getAllMent = async () => {
  const response = await resInstance.get("/mentors");
  return response.data;
};

const addStudent = async (students) => {
  const response = await resInstance.post("/addstudent", students);
  return response.data;
};

const getMentorToChange = async (id) => {
  const response = await resInstance.get(`/changementor/${id}`);
  return response.data;
};

const assignMentor = async (id, stuID) => {
  const response = await resInstance.post(
    `/changementor/${id}?MentorID=${stuID}`
  );
  return response.data;
};

const getStudentToassign = async (id) => {
  const response = await resInstance.get(`/assignstudent/${id}`);
  return response.data;
};

const assignStudent = async (id, mentID) => {
  const response = await resInstance.patch(
    `/assignstudent/${id}?StudentID=${mentID}`
  );
  return response.data;
};

const displayStudents = async (id) => {
  const response = await resInstance.get(`/displaystudents/${id}`);
  return response.data;
};

const addMentor = async (mentors) => {
  const response = await resInstance.post("/addMentor", mentors);
  return response.data;
};

const prevMentor = async (id) => {
  const response = await resInstance.get(`/previousmentor/${id}`);
  return response.data;
};

export {
  getAllStus,
  getAllMent,
  addStudent,
  getMentorToChange,
  assignMentor,
  getStudentToassign,
  assignStudent,
  displayStudents,
  addMentor,
  prevMentor
};
