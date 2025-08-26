import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'
import Button from './Button'
import PaginationCom from './PaginationCom'
import Link from 'next/link'

function YesterdayPaymentListCom() {
     const btnData1 = {
        route: '/manager/agentslistpage',
        text: 'Reject',
        fill:  false,
    }
     const btnData2 = {
        route: '/manager/agentslistpage',
        text: 'Approve',
        fill:  true,
    }
   const naveData ={
    title: "Yesterday Payment List",
    url:"/manager/todaypaymentlistpage",
    icon: true, 
    inpul: false,
    btn: false,
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
                <td className="border border-gray-200 p-2"> <Link href={"/manager/ledgerdetailspage"} >DUJDCBC544SG </Link></td>
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

export default YesterdayPaymentListCom