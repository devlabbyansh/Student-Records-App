import { useState } from "react";
import API from "../api"; 

export default function AddStudent() {
  const [student, setStudent] = useState({
    studentImg: "",
    studentName: "",
    deptName: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/student", student);
      console.log("Student Added:", res.data);
      alert("Student Added Successfully!");
      setStudent({ studentImg: "", studentName: "", deptName: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding student");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-4xl font-bold mb-4">Add Student</h2>

      <form onSubmit={handleSubmit} className="flex flex-col w-100 gap-4">
        <input
          type="text"
          name="studentImg"
          placeholder="Enter image URL"
          value={student.studentImg}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="text"
          name="studentName"
          placeholder="Enter name"
          value={student.studentName}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <input
          type="text"
          name="deptName"
          placeholder="Enter department"
          value={student.deptName}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
}
