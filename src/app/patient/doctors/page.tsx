import React from "react";
import DoctorCard from "../../components/DoctorCard";

function page() {
  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div className=" rounded-lg">
        <DoctorCard></DoctorCard>
      </div>
      <div className=" rounded-lg ">
        <DoctorCard></DoctorCard>
      </div>
      <div className=" rounded-lg ">
        <DoctorCard></DoctorCard>
      </div>
      <div className=" rounded-lg ">
        <DoctorCard></DoctorCard>
      </div>

      <div className=" rounded-lg ">
        <DoctorCard></DoctorCard>
      </div>
      <div className=" rounded-lg ">
        <DoctorCard></DoctorCard>
      </div>
      <div className=" rounded-lg bg-gray-200">
        <DoctorCard></DoctorCard>
      </div>

     
    </div>
  );
}

export default page;
