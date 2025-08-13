import React from 'react'

function PaginationCom() {
  return (
    <>
      {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <span>Showing 1 to 5 of 5 Entries</span>
            <div className="flex space-x-2">
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Previous</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded">1</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-100">Next</button>
            </div>
          </div>
    </>
  )
}

export default PaginationCom