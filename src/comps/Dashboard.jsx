
import { useEffect, useState } from "react";
import API from "../api"; // axios instance

export default function Dashboard({ searchQuery }) {
  const [students, setStudents] = useState([]);

  // fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get("/student"); // vite base url handle karega
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, []);

  // 🔹 Search logic: name match hone par filter
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl px-2 mt-6">
      <h2 className="text-4xl font-semibold mb-4">Student Records</h2>
      <div className="h-160 w-300 overflow-y-scroll p-4 bg-gray-100 rounded-lg shadow-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredStudents.map((student, index) => {

            const isMatch =
              searchQuery &&
              student.studentName
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            return (
              <div
                key={student._id}
                className={`flex items-center shadow-md rounded-lg p-4 transition 
                  ${
                    isMatch
                      ? "bg-blue-200 border-2 border-blue-500"
                      : "bg-white"
                  }`}
              >
                {/* Student Image */}
                <img
                  src={student.studentImg}
                  alt={student.studentName}
                  className="w-20 h-20 object-cover border border-blue-500 rounded-md"
                />

                {/* Student Info */}
                <div className="ml-4">
                  <p className="font-semibold">
                    Name:{" "}
                    <span className="font-normal">{student.studentName}</span>
                  </p>
                  <p className="font-semibold">
                    Dept:{" "}
                    <span className="font-normal">{student.deptName}</span>
                  </p>
                  <p className="font-semibold">
                    Roll No: <span className="font-normal">{index + 1}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
