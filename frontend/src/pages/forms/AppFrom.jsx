import { useState } from "react";
import { Link } from "react-router-dom";

const AppForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postbox, setPostbox] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [fax, setFax] = useState("");
  const [website, setWebsite] = useState(""); // New state for website URL

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="text-2xl underline mb-5">
        दरखास्त पेश गने फर्म वा कम्पनीको
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block">
            नाम:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="पूरा नाम"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {/* Add a new input field for website URL */}
        <div>
          <label htmlFor="website" className="block">
            वेबसाइट URL:
          </label>
          <input
            type="text"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="वेबसाइट URL"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        {/* Existing input fields */}
        <div>
          <label htmlFor="address" className="block">
            ठेगाना:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="ठेगाना"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="postbox" className="block">
            पोस्टबक्स नंबर:
          </label>
          <input
            type="text"
            id="postbox"
            value={postbox}
            onChange={(e) => setPostbox(e.target.value)}
            placeholder="पोस्टबक्स नंबर"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block">
            टेलिफोन नंबर:
          </label>
          <input
            type="text"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="टेलिफोन नंबर"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="mobile" className="block">
            मोबाइल नंबर:
          </label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="मोबाइल नंबर"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            इमेल:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="इमेल"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="fax" className="block">
            फ्याक्स नंबर:
          </label>
          <input
            type="text"
            id="fax"
            value={fax}
            onChange={(e) => setFax(e.target.value)}
            placeholder="फ्याक्स नंबर"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-between">
          <Link to="/introduction-form">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              फर्किनुहोस्
            </button>
          </Link>
          <Link to="/company-type-form">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              अर्को
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AppForm;
