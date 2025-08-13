import React from 'react'

function SideBarComp() {
  return (
    <>
     <div className="fixed top-0 left-0 min-h-screen pt-21 w-56 bg-[#fff7f4] border-r border-gray-200 p-4">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-red-500 cursor-pointer">
            {/* <FaUserFriends /> */}
             <span>Agents</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-red-500">
            {/* <FaMoneyBill />  */}
            <span>Payment</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 cursor-pointer hover:text-red-500">
            {/* <FaArrowAltCircleUp /> */}
             <span>Withdraw</span>
          </li>
        </ul>
        <div className="absolute bottom-6 left-4 flex items-center space-x-2 text-red-500 cursor-pointer">
          {/* <FaSignOutAlt />  */}
          <span>Logout</span>
        </div>
      </div>

    </>
  )
}

export default SideBarComp