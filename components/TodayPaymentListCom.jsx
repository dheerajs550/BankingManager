import React from 'react'
import NavBarSmall from './NavBarSmall'
import SideBarComp from './SideBarComp'
import Button from './Button'
import PaginationCom from './PaginationCom'
import Link from 'next/link'

function TodayPaymentListCom() {
     const btnData1 = {
        route: '/manager/popup',
        text: 'Reject',
        fill:  false,
    }
     const btnData2 = {
        route: '/manager/popop',
        text: 'Approve',
        fill:  true,
    }
   const naveData ={
    title: "Today Payment List",
    url:"/manager/todaypaymentlistpage",
    icon: false, 
    inpul: true,
    btn: true,
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
   {/* Payment Details Table */}
        <div className=" ">
          {/* <h2 className="text-lg font-semibold border-b pb-2 mb-4">Payment Details</h2> */}
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-2">SR. NO.</th>
                <th className="border border-gray-200 p-2">Date</th>
                <th className="border border-gray-200 p-2">Ladger Number</th>
                <th className="border border-gray-200 p-2">Customer Details</th>
                <th className="border border-gray-200 p-2">Amount(₹)</th>
                <th className="border border-gray-200 p-2">Action</th>
                <th className="border border-gray-200 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-2">1</td>
                <td className="border border-gray-200 p-2">03/04/2025</td>
                <td className="border border-gray-200 p-2"><Link href={"/manager/ledgerdetailspage"} >DUJDCBC544SG </Link></td>
                <td className="border border-gray-200 p-2">Yogesh Shinde<br></br> 9876543210 preston <br></br>Rd. Mumbi</td>
                <td className="border border-gray-200 p-2">5000</td>
                <td className="border border-gray-200 p-2">
                    <div className='mb-2'>
                    <Button data={btnData1} />
                    </div>
                     <div className=''>
                    <Button data={btnData2} />
                    </div>
                   
                    </td>
                <td className="border border-gray-200 p-2">pending</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-2">1</td>
                <td className="border border-gray-200 p-2">03/04/2025</td>
                <td className="border border-gray-200 p-2">DUJDCBC544SG</td>
                <td className="border border-gray-200 p-2">Yogesh Shinde<br></br> 9876543210 preston <br></br>Rd. Mumbi</td>
                <td className="border border-gray-200 p-2">5000</td>
                <td className="border border-gray-200 p-2">
                    <div className='mb-2'>
                    <Button data={btnData1} />
                    </div>
                     <div className='mb-2'>
                    <Button data={btnData2} />
                    </div>
                   
                    </td>
                <td className="border border-gray-200 p-2">pending</td>
              </tr>
            </tbody>
          </table>
          <PaginationCom/>
        </div>
          {/* Agent Information */}
         

         
        </div>
      </div>
    </div>
    </>
  )
}

export default TodayPaymentListCom

// app/manager/agentdetailspage/page.jsx
// "use client";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";

// export default function AgentDetailsPage() {
//   return (
    // <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
    //   <aside className="w-64 bg-red-50 p-4 flex flex-col justify-between">
    //     <div>
    //       <nav className="space-y-4">
    //         <Link href="#" className="flex items-center text-red-600 font-medium">
    //           Agents
    //         </Link>
    //         <Link href="#" className="flex items-center text-gray-700 hover:text-red-600">
    //           Payment
    //         </Link>
    //         <Link href="#" className="flex items-center text-gray-700 hover:text-red-600">
    //           Withdraw
    //         </Link>
    //       </nav>
    //     </div>
    //     <div>
    //       <Link href="#" className="text-red-600">Logout</Link>
    //     </div>
    //   </aside>

      {/* Main Content */}
    //   <main className="flex-1 p-6">
        {/* Header with Back Arrow */}
        // <div className="flex items-center gap-2 mb-4">
        //   <Link href="/manager/agentlistpage">
        //     <div className="p-2 rounded-full border border-gray-400 hover:bg-red-100 cursor-pointer">
        //       <FaArrowLeft className="text-gray-700" />
        //     </div>
        //   </Link>
        //   <h1 className="text-xl font-semibold">Agent Details</h1>
        // </div>

        {/* Agent Info Section */}
        // <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        //   <h2 className="text-lg font-semibold border-b pb-2 mb-4">Agent Information</h2>
        //   <div className="grid grid-cols-2 gap-4 text-sm">
        //     <p><strong>Agent Name:</strong> Theresa Webb</p>
        //     <p><strong>Phone Number:</strong> +91-9876543210</p>
        //     <p><strong>Email:</strong> example@mail.com</p>
        //     <p><strong>Address:</strong> 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        //     <p><strong>Joining Date:</strong> 06/04/2025</p>
        //   </div>
        // </div>

        {/* Payment Details Table */}
//         <div className="bg-white p-4 rounded-lg shadow-sm border">
//           <h2 className="text-lg font-semibold border-b pb-2 mb-4">Payment Details</h2>
//           <table className="w-full border-collapse border border-gray-200 text-sm">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-200 p-2">SR. NO.</th>
//                 <th className="border border-gray-200 p-2">Date</th>
//                 <th className="border border-gray-200 p-2">Amount(₹)</th>
//                 <th className="border border-gray-200 p-2">Payment Mode</th>
//                 <th className="border border-gray-200 p-2">Transaction ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-200 p-2">1</td>
//                 <td className="border border-gray-200 p-2">03/04/2025</td>
//                 <td className="border border-gray-200 p-2">3,20,000</td>
//                 <td className="border border-gray-200 p-2">Cash</td>
//                 <td className="border border-gray-200 p-2">NIL</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-200 p-2">2</td>
//                 <td className="border border-gray-200 p-2">02/04/2025</td>
//                 <td className="border border-gray-200 p-2">3,20,000</td>
//                 <td className="border border-gray-200 p-2">Cash</td>
//                 <td className="border border-gray-200 p-2">NIL</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }
