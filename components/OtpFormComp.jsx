import Button from "./Button";

export default function OtpFormComp() {
   
     const btnData1 = {
        route: '/manager/loginpage',
        text: 'Cancel',
        fill:  false,
    }
     const btnData2 = {
        route: '/manager/resetpasswordpage',
        text: 'Verify',
        fill:  true,
    }
  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className=" border p-8  border-gray-400 bg-white rounded-[2rem]  w-full max-w-md text-center">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">Welcome to Manager Portal</h1>
        <p className="text-gray-500 mb-6">
          We have sent a 6 digit OTP on <br />
          <span className="text-red-500 font-medium">example@email.com</span>
        </p>

        {/* OTP Input */}
        <input
          type="text"
          placeholder="Enter 6 digit OTP"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 mb-6"
        />

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
