import { Link } from "react-router-dom";

const ClearanceFrom = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">

        {/* Section 5 */}
        <h2 className="text-2xl font-bold mt-10 mb-6"> ईजाजतपत्र लिन चाहेको वर्ग :(घ) वर्ग</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">वर्ग</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="(घ) वर्ग"
            />
          </div>
        </form>

        {/* Section 6 */}
        <form className="space-y-4">
       
          <div className="flex justify-between">
          <Link to="/company-info-form">
          <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4">Go back</button>
          </Link>
          <Link to={'/income-source-form'}>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Next</button>

          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ClearanceFrom;
