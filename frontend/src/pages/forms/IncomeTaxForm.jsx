import { useState } from "react";
import { Link } from "react-router-dom";

const IncomeTaxForm = () => {
  const [incomeTaxDocuments, setIncomeTaxDocuments] = useState({
    ka: "",
    kha: "",
    ga: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeTaxDocuments({
      ...incomeTaxDocuments,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mt-10 mb-6">कर चुक्ता गरेको प्रमाण कागजात :</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">(क).:-</label>
            <input
              type="text"
              name="ka"
              value={incomeTaxDocuments.ka}
              onChange={handleChange}
              placeholder="(क).:-"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">(ख).:-</label>
            <input
              type="text"
              name="kha"
              value={incomeTaxDocuments.kha}
              onChange={handleChange}
              placeholder="(ख).:-"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">(ग).:-</label>
            <input
              type="text"
              name="ga"
              value={incomeTaxDocuments.ga}
              onChange={handleChange}
              placeholder="(ग).:-"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-between">
            <Link to="/job-description-form">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
            </Link>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeTaxForm;
