import { useState } from "react";
import { Link } from "react-router-dom";

const JobDescriptionForm = () => {
  const [jobDetails, setJobDetails] = useState([
    { id: 1, serialNumber: "", workType: "", yearOfWork: "", amount: "", officeName: "", progress: "" },
    { id: 2, serialNumber: "", workType: "", yearOfWork: "", amount: "", officeName: "", progress: "" }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...jobDetails];
    list[index][name] = value;
    setJobDetails(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mt-10 mb-6">कामको विवरण:</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {jobDetails.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{item.id}.</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">सि.नं. {item.id}.:</label>
                <input
                  type="text"
                  name="serialNumber"
                  value={item.serialNumber}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`सि.नं. ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">निर्माण सम्बन्धी कामको प्रकार {item.id}.:</label>
                <input
                  type="text"
                  name="workType"
                  value={item.workType}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`निर्माण सम्बन्धी कामको प्रकार ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">काम गरेको साल {item.id}.:</label>
                <input
                  type="text"
                  name="yearOfWork"
                  value={item.yearOfWork}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`काम गरेको साल ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">रकम {item.id}.:</label>
                <input
                  type="text"
                  name="amount"
                  value={item.amount}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`रकम ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ठेक्का दाता कार्यालयको नाम {item.id}.:</label>
                <input
                  type="text"
                  name="officeName"
                  value={item.officeName}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`ठेक्का दाता कार्यालयको नाम ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">कामको अवस्था प्रगति प्रतिशतमा {item.id}.:</label>
                <input
                  type="text"
                  name="progress"
                  value={item.progress}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`कामको अवस्था प्रगति प्रतिशतमा ${item.id}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <Link to="/machinary-form">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
            </Link>
            <Link to="/income-tax-form">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobDescriptionForm;
