import React from 'react'
import TableCom from './TableCom'
import NavBarSmall from './NavBarSmall'
import PaginationCom from './PaginationCom'

function MainContentCom({data}) {
   const naveData ={
    title: "Agent List",
    url:"/manager/managerlistpage",
    icon: false, 
    inpul: true,
   }
  return (
    <>
     <div className="flex-1 p-6 ml-56">
        <NavBarSmall data={naveData}/>
        <div className="bg-[#fff7f4] p-4 rounded shadow">

          {/* Table */}
         <TableCom data={data} />

          {/* Pagination */}
         <PaginationCom/>
        </div>
      </div>
    </>
  )
}

export default MainContentCom