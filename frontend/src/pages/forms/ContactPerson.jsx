import { Link } from "react-router-dom";
const ContactPerson = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6"> सम्पर्कको लागि फर्म वा कम्पनीको आधिकाऱीक :</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">नाम</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="नाम"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">ठेगाना</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="ठेगाना"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">पोस्टबक्स न:</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="पोस्टबक्स न:"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">टेलिफोन न:</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="टेलिफोन न:"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">मोबाइल न:</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="मोबाइल न:"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">इमेल:</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="इमेल"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">फ्याक्स न:</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="फ्याक्स न:"
            />
          </div>
          <div className="flex justify-between">
          <Link to="/company-type-form">
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
          </Link>
          <Link to={'/company-info-form'}>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>

          </Link>
        </div>
         
        </form>
      </div>
    </div>
  );
};

export default ContactPerson;
