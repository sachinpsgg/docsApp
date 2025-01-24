"use client"
import {Back, FilterIcon, GridIcon, ListIcon, SearchIcon} from "@/components/Icon";
import Image from "next/image";
import React, {useState} from "react";
import {DoctorCard} from "@/components/DoctorCard";
import Link from "next/link";


export default function Home() {
    const [dataView,setDataView] = useState("grid");
    const [expandedCard, setExpandedCard] = React.useState(null);

    const doctors = [
        {
            name: 'Dr. Tejas Sharma',
            phone: '+91 98765 43210',
            specialty: 'Gynaecology',
            expertise: 'Gynaecology',
            gender: 'Male',
            sessionMode: 'In-Person & Online',
            fee: '₹1,500/-',
            image: '/Tejas.png',
        },
        {
            name: 'Dr. Priya Kapoor',
            phone: '+91 98765 43210',
            specialty: 'IVF Specialist',
            expertise: 'IVF Specialist',
            gender: 'Female',
            sessionMode: 'In-Person & Online',
            fee: '₹1,000/-',
            image: '/Priya.png',
        },
        {
            name: 'Dr. Pranav Saxena',
            phone: '+91 98765 43210',
            specialty: 'Gynaecology',
            expertise: 'Gynaecology',
            gender: 'Male',
            sessionMode: 'In-Person & Online',
            fee: '₹2,500/-',
            image: '/Pranab.png',
        },
        {
            name: 'Dr. Toshib Bagde',
            phone: '+91 98765 543210',
            specialty: 'Psychologist',
            expertise: 'Psychologist',
            gender: 'Male',
            sessionMode: 'In-Person & Online',
            fee: '₹3,500/-',
            image: '/Toshib.png',
        },
    ];
    const toggleView = () => {
        setDataView(dataView === "grid" ? "list" : "grid");
    };
  // @ts-ignore
    return (
      <div className="pt-2 h-full"  style={{
          background: `
      linear-gradient(180deg, #DFDAFB 0.11%, #F9CCC5 64.01%),
      linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))
    `,
      }}>
          <div className="flex items-center mb-4 gap-4">

              <Link href="/"><Back/>

              </Link> <h1 className="text-[14px] font-semibold">Available Psychologists</h1>
          </div>
          <div className="bg-gradient-to-b from-[#ddd6fe] to-[#f0abfc] h-screen">
              <div className="flex items-center space-x-2  p-4 rounded-lg">
                  <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full">
                      <input
                          type="text"
                          placeholder="Search Psychologists..."
                          className="bg-transparent outline-none text-gray-500 w-full"
                      />
                      <SearchIcon/>
                  </div>
                  <button className="bg-white p-2 rounded-lg shadow-md" onClick={toggleView}>
                      {dataView === "grid" ? <ListIcon /> : <GridIcon/>}
                  </button>
                  <button className="bg-white p-2 rounded-lg shadow-md">
                      <FilterIcon/>
                  </button>
              </div>
              {dataView === "grid" ? (<div className="grid grid-cols-2 sm:grid-cols-2 p-2">
                  {doctors.map((doctor, index) => (
                      <div key={index} className="bg-white rounded-2xl shadow-lg px-1 py-2 m-2">
                          <Image src={doctor.image} alt="img" width={180}
                                 height={169}  className="rounded-md m-auto"/>
                          <div className="text-center mt-4">
                              <h2 className="text-lg font-bold">{doctor.name}</h2>
                              <p className="text-gray-600">{doctor.specialty}</p>
                              <p className="text-gray-800 font-semibold">Session Fee: {doctor.fee}</p>
                              <Link href="/schedule">
                              <button
                                  className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-2xl w-full">Book
                                  Now
                              </button>
                              </Link>
                          </div>
                      </div>
                  ))}
              </div>):(<div className="mt-10 p-3 divide-y">
                  {doctors.map((doctor, index) => (
                      <DoctorCard
                          key={index}
                          doctor={doctor}
                          expanded={expandedCard === index}
                          onToggle={() => setExpandedCard(expandedCard === index ? null : index)}
                      />
                  ))}
              </div>)}
          </div>
      </div>
  );
}
