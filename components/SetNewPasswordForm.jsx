import React from 'react'
import Button from './Button';

export default function SetNewPasswordForm() {
   const btnData1 = {
        route: '/manager/loginpage',
        text: 'Cancel',
        fill:  false,
    }
     const btnData2 = {
        route: '/manager/agentslistpage',
        text: 'Confirm',
        fill:  true,
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white rounded-[2rem] shadow-md p-8 w-full max-w-md text-center">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">Welcome to Manager Portal</h1>
        <p className=" mb-6 font-bold">Set New Password</p>

        {/* Password Field */}
        <div className="mb-4 text-left">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-6 text-left">
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          {/* Cancel Button */}
         
          <div className="  flex items-center justify-center">
          <Button data={btnData1}/>
          </div>

          {/* Verify Button */}
         
          <div className="  flex items-center justify-center">
           <Button data={btnData2}/>
           </div>
        </div>
      </div>
    </div>
  );
}
