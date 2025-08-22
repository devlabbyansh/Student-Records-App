import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function ManageStudent() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get("/student");
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };
    fetchStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/student/${id}`);
      setStudents((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <h2 className="text-4xl font-bold mb-4">Manage Students</h2>

      <div className="h-150 w-280 overflow-y-scroll p-4 bg-gray-100 rounded-lg shadow-inner">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Name</th>
              <th className="p-2">Dept</th>
              <th className="p-2">Image</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="border-b">
                <td className="p-2">{student.studentName}</td>
                <td className="p-2">{student.deptName}</td>
                <td className="p-2">
                  <img
                    src={student.studentImg}
                    alt={student.studentName}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="p-2 flex gap-3">
                  <button
                    onClick={() => navigate(`/reports?id=${student._id}`)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => handleDelete(student._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
