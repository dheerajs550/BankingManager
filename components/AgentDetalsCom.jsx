import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
function AgentDetalsCom() {
   const naveData ={
    title: "Agent Details",
    url:"/manager/managerlistpage",
    icon: true, 
    inpul: false,
   }
  return (
    <>
    <div className="flex min-h-screen bg-[#f9f7f5] mt-20">
      {/* Sidebar */}
    <SideBarComp/>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-56">
        {/* Header */}
       <NavBarSmall data={naveData}/>

        {/* Agent Details */}
        <div className="bg-[#fff7f4] mt-6 p-4 rounded shadow">
          {/* <h2 className="font-semibold text-lg border-b pb-2">Agent Details</h2> */}

          {/* Agent Information */}
          <div className="mt-4 border rounded p-4 bg-white shadow-sm">
            <h3 className="font-semibold mb-3">Agent Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p><strong>Agent Name:</strong> Theresa Webb</p>
              <p><strong>Phone Number:</strong> +91-9876543210</p>
              <p><strong>Email:</strong> example@mail.com</p>
              <p><strong>Address:</strong> 1101 Thornridge Cir. Shiloh, Hawaii 81063</p>
              <p><strong>Joining Date:</strong> 01/04/2025</p>
            </div>
             {/* Payment Details */}
          <div className="mt-6  rounded bg-white ">
            <h3 className="font-semibold p-4 border-b">Payment Details</h3>
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">SR. NO.</th>
                  <th className="border px-3 py-2">Date</th>
                  <th className="border px-3 py-2">Amount(₹)</th>
                  <th className="border px-3 py-2">Payment Mode</th>
                  <th className="border px-3 py-2">Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-3 py-2">3</td>
                  <td className="border px-3 py-2">03/04/2025</td>
                  <td className="border px-3 py-2">3,20,000</td>
                  <td className="border px-3 py-2">Cash</td>
                  <td className="border px-3 py-2">NIL</td>
                </tr>
                <tr className="bg-[#fff7f4]">
                  <td className="border px-3 py-2">2</td>
                  <td className="border px-3 py-2">02/04/2025</td>
                  <td className="border px-3 py-2">3,20,000</td>
                  <td className="border px-3 py-2">Cash</td>
                  <td className="border px-3 py-2">NIL</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>

         
        </div>
      </div>
    </div>
    </>
  )
}

export default AgentDetalsCom