import GovernorateSelect from "./GovernorateSelect";
import "./CreateClient.css"
import { Link } from "react-router-dom";
import { useState } from "react";



export default function CreateClient2() {
    /* var for value of each field   */ 
    const [id,setId] = useState('')
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    const [position,setPosition] = useState('')
    const [socialNumber,setSocialNumber] = useState('')
    const [phone,setPhone] = useState('')
    const [paymentDate,setPaymentDate] = useState('')
    
    const dbUrl ="http://localhost:3200/clients";


    const handleSubmit =(e) => {
        e.preventDefault();
       
       const clientInfo ={id,name,address,position,socialNumber,phone,paymentDate}
       
       fetch(dbUrl,{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body:JSON.stringify(clientInfo)
       }).then((res) => {
           console.log(res)
           alert("Client Added Successfully")
           window.location.reload()
       }).catch((err) => {
           console.log(err)
       })

    }

  return (
    <div className=" container max-w-3xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-100 mb-6 text-center">Add a New Student</h1>
      
      <form onSubmit={handleSubmit}
      
      className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ID Field */}
          <div className="space-y-2">
            <label htmlFor="id" className="block text-sm font-medium text-gray-300">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address/Governorate Field */}
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-300">
              Address
            </label>
            <GovernorateSelect handleChange={(e) =>{
                setAddress(e.target.value)
                console.log(e.target.value)
            } }
            value={address}
            
            />
            
          </div>

          {/* Position Field */}
          <div className="space-y-2">
            <label htmlFor="position" className="block text-sm font-medium text-gray-300">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Enter Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Social Number Field */}
          <div className="space-y-2">
            <label htmlFor="socialNumber" className="block text-sm font-medium text-gray-300">
              Social Number
            </label>
            <input
              type="text"
              id="socialNumber"
              name="socialNumber"
              placeholder="Enter Social Number"
              value={socialNumber}
              onChange={(e) => setSocialNumber(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            
            />
          </div>

          {/* Payment Date Field */}
          <div className="space-y-2">
            <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-300">
              Payment Date
            </label>
            <input
              type="date"
              id="paymentDate"
              name="paymentDate"
              placeholder="Enter Payment Date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-around items-center pt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Save
          </button>

          {/* Back Button */}
          <button className="px-6 py-2 bg-gray-600 text-black font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900" >
            <Link to="/">
            Go Back
            </Link>
            </button>
        </div>
      </form>
    </div>
  );
}