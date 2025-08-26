"use client"
import MainContentCom from '@/components/MainContentCom';
import SideBarComp from '@/components/SideBarComp';
import React from 'react'
import { useState } from "react";
// import { FaEye, FaUserFriends, FaMoneyBill, FaArrowAltCircleUp, FaSignOutAlt } from "react-icons/fa";

export default function AgentListPage() {
  const [agents] = useState([
    { id: 1, name: "Theresa Webb", email: "example@mail.com", phone: "+91-9876543210", address: "1101 Thornridge Cir. Shiloh, Hawaii 81063" },
    { id: 2, name: "Jane Cooper", email: "example@mail.com", phone: "+91-9876543210", address: "3517 W. Gray St. Utica, Pennsylvania 57837" },
    { id: 3, name: "Jacob Jones", email: "example@mail.com", phone: "+91-9876543210", address: "8502 Preston Rd. Inglewood, Maine 98380" },
    { id: 4, name: "Brooklyn Simmons", email: "example@mail.com", phone: "+91-9876543210", address: "4140 Parker Rd. Allentown, New Mexico 31134" },
    { id: 5, name: "Jerome Bell", email: "example@mail.com", phone: "+91-9876543210", address: "2118 Thornridge Cir. Syracuse, Connecticut 35624" },
  ]);

  return (
    <div className="flex min-h-screen bg-[#f9f7f5] mt-20">
      {/* Sidebar */}
     <SideBarComp/>
      {/* Main Content */}
     <MainContentCom data={agents} />
    </div>
  );
}
