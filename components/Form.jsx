import Button from "./Button";

export default function LoginForm() {
      const btnData1 = {
        route: '/manager/otpform',
        text: 'Login',
        fill:  true,
    }
  return (
    <div className=" flex items-center justify-center min-h-screen bg-gray-50 px-1">
      <div className=" border p-7  border-gray-400  rounded-[2rem]  w-full max-w-md">
        {/* Heading */}
        <h1 className="text-center text-2xl font-bold mb-2">
          Welcome to Manager Portal
        </h1>
        <p className="text-center text-gray-500 mb-6">
          To Access Your Account
        </p>

        {/* User ID Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">User ID</label>
          <input
            type="text"
            placeholder="Enter User Id"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <div className="text-right mt-1">
            <a href="#" className="text-red-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
        <div className="  flex items-center justify-center">
          <Button data={btnData1}/>
        </div>
      </div>
    </div>
  );
}
