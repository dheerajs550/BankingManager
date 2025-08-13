import Link from 'next/link';
import React from 'react'
import { FaEye} from "react-icons/fa";

function TableCom({data}) {
  return (
    <>
 <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">SR.NO.</th>
                  <th className="border px-3 py-2">Agent Name</th>
                  <th className="border px-3 py-2">Email ID</th>
                  <th className="border px-3 py-2">Phone Number</th>
                  <th className="border px-3 py-2">Address</th>
                  <th className="border px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((data, index) => (
                  <tr key={data.id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{index + 1}</td>
                    <td className="border px-3 py-2">{data.name}</td>
                    <td className="border px-3 py-2 text-red-500">{data.email}</td>
                    <td className="border px-3 py-2">{data.phone}</td>
                    <td className="border px-3 py-2">{data.address}</td>
                    <td className="border px-3 py-2  text-center  align-middle text-red-500 cursor-pointer ">
                      <Link href={`/manager/agentdetalspage`}>
                      <FaEye className='mx-auto' />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    </>
  )
}

export default TableCom