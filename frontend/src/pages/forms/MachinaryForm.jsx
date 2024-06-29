import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

const MachineyForm = () => {
  // const [aanyabehora, setAanyaBehora] = useState("");
  // const [kharidmiti, setKharidMiti] = useState("");

  const [machineryDetails, setMachineryDetails] = useState([
    { id: 1, serialNumber: "", description: "", registrationNumber: "", capacity: "", price: "", purchaseDate: "", otherDetails: "" },
    { id: 2, serialNumber: "", description: "", registrationNumber: "", capacity: "", price: "", purchaseDate: "", otherDetails: "" }
  ]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...machineryDetails];
    list[index][name] = value;
    setMachineryDetails(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mt-10 mb-6">औजारको विवरण:</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {machineryDetails.map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{index + 1}.</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700">सि.नं. {index + 1}.:</label>
                <input
                  type="text"
                  name={`serialNumber-${index}`}
                  value={item.serialNumber}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`सि.नं. ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">सवारी साधनको विवरण {index + 1}.:</label>
                <input
                  type="text"
                  name={`description-${index}`}
                  value={item.description}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`सवारी साधनको विवरण ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">दर्ता.नं. {index + 1}.:</label>
                <input
                  type="text"
                  name={`registrationNumber-${index}`}
                  value={item.registrationNumber}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`दर्ता.नं. ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">क्षमता संख्या {index + 1}.:</label>
                <input
                  type="text"
                  name={`capacity-${index}`}
                  value={item.capacity}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`क्षमता संख्या ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">मुल्य {index + 1}.:</label>
                <input
                  type="text"
                  name={`price-${index}`}
                  value={item.price}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`मुल्य ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              {/* Add Nepali Calendar for Purchase Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">खरिद मिति {index + 1}.:</label>
                <Calendar
                  dateFormat="DD/MM/YYYY"
                  value={item.purchaseDate}
                  onChange={(date) => {
                    const list = [...machineryDetails];
                    list[index].purchaseDate = date;
                    setMachineryDetails(list);
                  }}
                  locale="ne"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">अन्य व्यहोरा {index + 1}.:</label>
                <input
                  type="text"
                  name={`otherDetails-${index}`}
                  value={item.otherDetails}
                  onChange={(e) => handleChange(e, index)}
                  placeholder={`अन्य व्यहोरा ${index + 1}.`}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <Link to="/manpower-form">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
            </Link>
            <Link to="/job-description-form">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MachineyForm
