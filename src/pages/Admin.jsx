// import Admin from "./pages/Admin";  // ← capital A
import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/appointments"
      );

      setAppointments(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Date</th>
              <th className="p-4">Time</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.email}</td>
                <td className="p-4">{item.phone}</td>
                <td className="p-4">{item.date}</td>
                <td className="p-4">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {appointments.length === 0 && (
          <p className="p-6 text-center text-gray-500">
            No appointments found
          </p>
        )}
      </div>
    </div>
  );
}