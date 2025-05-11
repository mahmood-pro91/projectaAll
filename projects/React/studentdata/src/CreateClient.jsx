
import "./CreateStudent.css"
import GovernorateSelect from "./GovernorateSelect";


export default function CreateClient() {
  return (
    <div className="container max-w-2xl mx-auto px-6 py-8 bg-white rounded-lg shadow-lg  ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Client</h1>
      <form className="space-y-6" action="" method="post">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ID Field */}
          <div className="space-y-2">
            <label htmlFor="id" className="block text-sm font-medium text-gray-700">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter ID"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

        {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {/* Address/Governorate Field */}
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <GovernorateSelect />
          </div>
            {/* Position Field */}
            <div className="space-y-2">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter Position"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
           {/* Social Number Field */}
           <div className="space-y-2">
            <label htmlFor="socialNumber" className="block text-sm font-medium text-gray-700">
              Social Number
            </label>
            <input
              type="text"
              id="socialNumber"
              name="socialNumber"
              placeholder="Enter Social Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
           {/* Phone Field */}
           <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
           {/* Payment Date Field */}
           <div className="space-y-2">
            <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">
              Payment Date
            </label>
            <input
              type="date"
              id="paymentDate"
              name="paymentDate"
              placeholder="Enter Payment Date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
         {/* Submit Button */}
         <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
         </form>
    </div>
  );
}