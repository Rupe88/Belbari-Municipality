import { useState } from "react";
import { Link } from "react-router-dom";

const ManPowerForm = () => {
  const [professional, setProfessional] = useState("");
  const [nonProfessional, setNonProfessional] = useState("");
  const [other, setOther] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mt-10 mb-6">कामदारको विवरण:</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">प्राबिधिक:</label>
            <input
              type="text"
              value={professional}
              onChange={(e) => setProfessional(e.target.value)}
              placeholder="प्राबिधिक"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">अप्राविधिक:</label>
            <input
              type="text"
              value={nonProfessional}
              onChange={(e) => setNonProfessional(e.target.value)}
              placeholder="अप्राविधिक"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">अन्य:</label>
            <input
              type="text"
              value={other}
              onChange={(e) => setOther(e.target.value)}
              placeholder="अन्य"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between">
            <Link to="/income-source-form">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
            </Link>
            <Link to="/machinary-form">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManPowerForm;
