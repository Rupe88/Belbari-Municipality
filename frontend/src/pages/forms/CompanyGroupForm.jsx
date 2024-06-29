import { Link } from "react-router-dom";
const CompanyGroupForm = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">

          {/* Section 6 */}
          <h2 className="text-2xl font-bold mt-10 mb-6">
            {" "}
            समुहिकरण हुन चाहेको समूह
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                समूह
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="समूह"
              />
            </div>
            <div className="flex justify-between">
              <Link to="/company-group-form">
                <button className="bg-gray-500 text-white px-4 py-2 rounded">
                  Go back
                </button>
              </Link>
              <Link to={"/income-source-form"}>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyGroupForm;
