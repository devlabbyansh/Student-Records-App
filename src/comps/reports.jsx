import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function Report() {
  const [searchParams] = useSearchParams();
  const studentId = searchParams.get("id");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentName: "",
    deptName: "",
    studentImg: "",
  });

  useEffect(() => {
    const fetchStudent = async () => {
      if (!studentId) return;
      try {
        const res = await API.get(`/student/${studentId}`);
        setFormData(res.data);
      } catch (err) {
        console.error("Error fetching student:", err);
      }
    };
    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (studentId) {
        await API.put(`/student/${studentId}`, formData);
        alert("Student updated successfully!");
      }
      navigate("/managestudent");
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold">Dept</label>
          <input
            type="text"
            name="deptName"
            value={formData.deptName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block font-semibold">Image URL</label>
          <input
            type="text"
            name="studentImg"
            value={formData.studentImg}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
