
import React from "react";
import { DownIcon, UpIcon } from "./Icon";
import Link from "next/link";

// @ts-ignore
export const DoctorCard = ({ doctor, expanded, onToggle }) => {
    return (
        <div className="bg-white rounded-lg shadow-md mb-4">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full mr-4"/>
                    <div>
                        <h2 className="text-lg font-semibold">{doctor.name}</h2>
                        <p className="text-gray-600">{doctor.phone}</p>
                        <p className="text-[#565555] text-[14px] font-bold">{doctor.specialty}</p>
                    </div>
                </div>
                <button onClick={onToggle} className="text-gray-500">
                    {expanded ? (
                        <UpIcon/>
                    ) : (
                        <DownIcon/>
                    )}
                </button>
            </div>
            {expanded && (
                <div className="mt-4 border-t-2 ">
                    <div className="p-4">
                        <div className="flex justify-between ">
                            <div>
                                <p className="text-gray-950 font-semibold text-[14px]">Expertise</p>
                                <p className="text-[#6D6A5D] font-medium text-[12px]">{doctor.expertise}</p>
                            </div>
                            <div>
                                <p className="text-gray-950 font-semibold text-[14px]">Gender</p>
                                <p className="text-[#6D6A5D] font-medium text-[12px]">{doctor.gender}</p>
                            </div>
                        </div>
                        <div className="flex justify-between mt-2">
                            <div>
                                <p className="text-gray-950 font-semibold text-[14px]">Session mode</p>
                                <p className="text-[#6D6A5D] font-medium text-[12px]">{doctor.sessionMode}</p>
                            </div>
                            <div>
                                <p className="text-gray-950 font-semibold text-[14px]">Session Fee</p>
                                <p className="text-[#6D6A5D] font-medium text-[12px]">{doctor.fee}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t-2">
                        <Link href="/schedule">
                        <button className="w-full mt-4 py-2 rounded-lg text-white"
                                style={{background: 'linear-gradient(to right, #a18cd1, #fbc2eb)'}}
                        >
                            Book Now
                        </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};