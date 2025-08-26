import React from 'react'
import SideBarComp from './SideBarComp'
import NavBarSmall from './NavBarSmall'

function WithdrawDetailsCom() {
 const naveData ={
    title: " Details",
    url:"/manager/withdrawlistpage",
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
       {/* Withdraw Info Section */}
        <div className="bg-[#fff9f5] p-4 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold border-b pb-2 mb-4">Withdraw Details</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Withdraw Request Number:</strong> CBC544SG</p>
            <p><strong>Customer Name:</strong> Yogesh Shinde</p>
            <p><strong>Phone Number:</strong> 9876543210</p>
            <p><strong>Address:</strong> Preston Rd. Mumbai</p>
            <p><strong>Ledger Number:</strong> DUJDJCBC544SG</p>
            <p><strong>Ledger Type:</strong> FD</p>
            <p><strong>Ledger Duration:</strong> 3 Years (36 Months)</p>
            <p><strong>Ledger Deposit Date:</strong> 01/04/2022</p>
            <p><strong>Ledger Withdraw Date:</strong> 01/04/2025</p>
            <p><strong>Ledger Status:</strong> Matured</p>
            <p><strong>Amount Deposit (₹):</strong> 8,00,000</p>
            <p><strong>Interest (₹):</strong> 2,00,000</p>
            <p><strong>Total Withdrawal Amount (₹):</strong> 10,00,000</p>
            <p className="col-span-2"><strong>Bank Details:</strong><br />
              Bank Name: HDFC BANK<br />
              Account No.: 35478965442<br />
              IFSC: HDFC0009876<br />
              Branch Name: Mumbai Branch
            </p>
          </div>
        </div>
          

         
        </div>
      </div>
    </div>
    </>
  )
}

export default WithdrawDetailsCom