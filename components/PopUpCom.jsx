
"use client";
import { useState } from "react";

export default function PopUpCom() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex justify-center mt-110">
      {/* Trigger Button */}
      {/* <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Reject
      </button> */}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h2 className="text-center text-lg font-semibold mb-6">
              Are you sure want to Reject?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="border border-red-500 text-red-500 px-4 py-2 rounded hover:bg-red-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("Rejected!");
                  setIsOpen(false);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
