import { Link } from "react-router-dom";
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { useState } from "react";
const CompanyInfoForm = () => {
  const [dartamiti, setDartaMiti]=useState("");


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        
        <h2 className="text-2xl font-bold mt-10 mb-6"> फर्म वा कम्पनीको विवरण :</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">दर्ता न.</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="दर्ता न."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">दर्ता मिति</label>
            <Calendar
            value={dartamiti}
            onChange={setDartaMiti}
            dateFormat="YYYY-MM-DD"
            className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">अधिकृत पुजी रू:-</label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="अधिकृत पुजी रू:-"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">जारी पुजी रू:</label>
            <input
              type="number"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="जारी पुजी रू:"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">नाम ठेगाना:</label>
            <textarea
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="नाम ठेगाना:"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-between">
          <Link to="/contact-person-form">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
          </Link>
          <Link to={'/clearance-form'}>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>

          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyInfoForm;
