import React from 'react'

function NavBar() {
  return (
    <> 
    <nav className="fixed top-0 left-0 w-full bg-red-50 px-6 py-4 flex items-center justify-between border-b border-red-100 z-50">
      {/* Left Section */}
      <div>
        <h1 className="text-red-600 font-bold text-lg uppercase">
          Maa Anusaya Urban
        </h1>
        <p className="text-sm text-gray-600">
          Credit Co-operative Society Ltd, Gondiya
        </p>
      </div>

      {/* Right Circle Button */}
      <div className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center hover:bg-red-100 cursor-pointer">
        <span className="text-red-500 font-bold">O</span>
      </div>
    </nav>
    </>
  )
}

export default NavBar