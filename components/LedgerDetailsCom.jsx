import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'

function LedgerDetailsCom() {
 const naveData ={
    title: "Ledger Details",
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
         
        {/* Ledger Info Section */}
        <div className="bg-[#fff] p-4  shadow-sm border">
          <h2 className="text-lg font-semibold  pb-2 mb-4">Ledger Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Customer Name:</strong> Yogesh Shinde</p>
            <p><strong>Phone Number:</strong> 9876543210</p>
            <p><strong>Address:</strong> Preston Rd. Mumbai</p>
            <p><strong>Ledger Number:</strong> DUJDJCBC544SG</p>
            <p><strong>Ledger Type:</strong> RD</p>
            <p><strong>Ledger Duration:</strong> 3 Years (36 Months)</p>
            <p><strong>Ledger Starting Date:</strong> 01/04/2024</p>
            <p><strong>Ledger Ending Date:</strong> 01/04/2027</p>
            <p><strong>Installment Type:</strong> Daily</p>
            <p><strong>Installment Amount (₹):</strong> 5000</p>
            <p className="col-span-2"><strong>Bank Details:</strong><br />
              Bank Name: HDFC BANK<br />
              Account No.: 35478965442<br />
              IFSC: HDFC0009876<br />
              Branch Name: Mumbai Branch
            </p>
            <p className="col-span-2"><strong>Agent Details:</strong><br />
              Agent Name: Tony Stark<br />
              Phone No.: +91-9876543210<br />
              Email: example@mail.com<br />
              Address: Preston Rd. Mumbai
            </p>
          </div>
        </div>
          

         
        </div>
      </div>
    </div>
    </>
  )
}

export default LedgerDetailsCom