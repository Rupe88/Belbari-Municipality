import { useState } from "react";
import { Link } from "react-router-dom";

const IncomeSourceForm = () => {
  const [permanentOverdraft, setPermanentOverdraft] = useState({
    amount: "",
    bankName: ""
  });
  const [currentAccount, setCurrentAccount] = useState({
    amount: "",
    bankName: ""
  });
  const [savingsAccount, setSavingsAccount] = useState({
    amount: "",
    bankName: ""
  });
  const [fixedDeposit, setFixedDeposit] = useState({
    amount: "",
    bankName: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mt-10 mb-6">आर्थिक श्रोतको विवरण:</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">स्थाही ओभरड्राफ्ट:</label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={permanentOverdraft.amount}
                onChange={(e) => setPermanentOverdraft({ ...permanentOverdraft, amount: e.target.value })}
                placeholder="रकम रू:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                value={permanentOverdraft.bankName}
                onChange={(e) => setPermanentOverdraft({ ...permanentOverdraft, bankName: e.target.value })}
                placeholder="बैंक वा वितिय सस्थाको नाम:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">मुद्ती खाता:</label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={currentAccount.amount}
                onChange={(e) => setCurrentAccount({ ...currentAccount, amount: e.target.value })}
                placeholder="रकम रू:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                value={currentAccount.bankName}
                onChange={(e) => setCurrentAccount({ ...currentAccount, bankName: e.target.value })}
                placeholder="बैंक वा वितिय सस्थाको नाम:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">चल्ती खाता:</label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={savingsAccount.amount}
                onChange={(e) => setSavingsAccount({ ...savingsAccount, amount: e.target.value })}
                placeholder="रकम रू:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                value={savingsAccount.bankName}
                onChange={(e) => setSavingsAccount({ ...savingsAccount, bankName: e.target.value })}
                placeholder="बैंक वा वितिय सस्थाको नाम:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">बचत खाता:</label>
            <div className="flex space-x-4">
              <input
                type="text"
                value={fixedDeposit.amount}
                onChange={(e) => setFixedDeposit({ ...fixedDeposit, amount: e.target.value })}
                placeholder="रकम रू:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="text"
                value={fixedDeposit.bankName}
                onChange={(e) => setFixedDeposit({ ...fixedDeposit, bankName: e.target.value })}
                placeholder="बैंक वा वितिय सस्थाको नाम:-"
                className="mt-1 flex-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link to="/clearance-form">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">Go back</button>
            </Link>
            <Link to="/manpower-form">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IncomeSourceForm;
