import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CompanyTypeForm = ({ onNext }) => {
  const navigate=useNavigate()
  const [nature, setNature] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleNext = () => {
    if (nature !== '') {
      onNext();
      navigate("/")

    } else {
      alert('Please select the nature of the firm or company.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <p className='underline text-2xl mb-5'>कम्पनीको प्रकृति:</p>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="privateLimited"
              name="nature"
              value="प्राइभेट लिमिटेड कम्पनी"
              checked={nature === 'प्राइभेट लिमिटेड कम्पनी'}
              onChange={(e) => setNature(e.target.value)}
            />
            <label htmlFor="privateLimited">प्राइभेट लिमिटेड कम्पनी</label>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="radio"
              id="publicLimited"
              name="nature"
              value="पुब्लिक लिमिटेड कम्पनी"
              checked={nature === 'पुब्लिक लिमिटेड कम्पनी'}
              onChange={(e) => setNature(e.target.value)}
            />
            <label htmlFor="publicLimited">पुब्लिक लिमिटेड कम्पनी</label>
          </div>
        </div>
        <div className="flex justify-between">
          <Link to="/app-form">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
          </Link>
         <Link to="/contact-person-form"> <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button></Link>
        </div>
      </form>
    </div>
  );
};

// Add props validation
CompanyTypeForm.propTypes = {
  onNext: PropTypes.func.isRequired, // Validate onNext prop as a required function
};

export default CompanyTypeForm;
