import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
const IntroductionForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [nagritaNumber, setNagritaNumber] = useState("");
  const [dob, setDob] = useState(null); // State for Nepali date of birth
  const [issueDate, setIssueDate] = useState(null); // State for Nepali issue date
  const [profilePicture, setProfilePicture] = useState(null);
  const [frontFace, setFrontFace] = useState(null);
  const [backFace, setBackFace] = useState(null);

  const navigate = useNavigate();

  const handleProfilePictureChange = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
  };

  const handleFrontFaceChange = (e) => {
    setFrontFace(URL.createObjectURL(e.target.files[0]));
  };

  const handleBackFaceChange = (e) => {
    setBackFace(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    navigate("/app-form");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="text-2xl underline mb-5">परिचय</div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
          <div className="w-full sm:w-1/2 items-center">
            <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="mt-1 block w-full"
              accept="image/png, image/jpeg"
            />
            {profilePicture && (
              <img
                src={profilePicture}
                alt="Profile"
                className="mt-2 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nagrita Front Face</label>
          <input
            type="file"
            onChange={handleFrontFaceChange}
            className="mt-1 block w-full"
            accept="image/png, image/jpeg"
          />
          {frontFace && (
            <img
              src={frontFace}
              alt="Front Face"
              className="mt-2 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nagrita Back Face</label>
          <input
            type="file"
            onChange={handleBackFaceChange}
            className="mt-1 block w-full"
            accept="image/png, image/jpeg"
          />
          {backFace && (
            <img
              src={backFace}
              alt="Back Face"
              className="mt-2 w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">नाम:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ठेगाना:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">मोबाइल न:</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">नागरिता न:</label>
          <input
            type="text"
            value={nagritaNumber}
            onChange={(e) => setNagritaNumber(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">जन्म मिति:</label>
          <Calendar
            value={dob}
            onChange={setDob}
            dateFormat="YYYY-MM-DD"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">जारी मिति:</label>
          <Calendar
            value={issueDate}
            onChange={setIssueDate}
            dateFormat="YYYY-MM-DD"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow-sm hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default IntroductionForm;
