import React from "react";
import NavBareAdmin from "./NavBareAdmin";
import BooksData from "../assets/images/BooksData.json";
import StudentAnimation from "../assets/images/StudentAnimation.json";
import Lottie from "lottie-react";
import AdminAnimation from "../assets/images/Admin.json";
import DataDashbord from "./DataDashbord";
import AddIMG from "../assets/images/Addicon.svg";
import Avatar from "../assets/images/avatar.svg";
import Plus from "../assets/images/Plus.svg";

import { LineChart, Line, Bar, BarChart, XAxis, YAxis } from "recharts";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function LibraryData() {
  const data = [
    { name: "January", uv: 400, pv: 200, amt: 200 },
    { name: "February", uv: 300, pv: 500, amt: 800 },
    { name: "March", uv: 200, pv: 400, amt: 600 },
    { name: "April", uv: 500, pv: 300, amt: 800 },
    { name: "May", uv: 100, pv: 100, amt: 200 },
    { name: "June", uv: 200, pv: 400, amt: 600 },
    { name: "July", uv: 300, pv: 300, amt: 600 },
    { name: "August", uv: 400, pv: 200, amt: 600 },
    { name: "September", uv: 200, pv: 200, amt: 400 },
    { name: "October", uv: 100, pv: 100, amt: 200 },
    { name: "November", uv: 500, pv: 500, amt: 1000 },
    { name: "December", uv: 600, pv: 600, amt: 1200 },
  ];

  const dataPie = [
    { name: "Borrowed", value: 400 },
    { name: "Returned", value: 300 },
    { name: "Still", value: 300 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="">
        <div></div>
        <div className="px-5 py-5 border-b border-black pb-2 sha flex justify-between items-center ">
          <h1 className="font-semibold text-red-700 text-2xl tracking-wide">
            Dashboard Management
          </h1>
          <div className="flex gap-3 items-center">
            <div className="px-4 rounded-md text-white bg-red-700 py-1 flex items-center gap-2 border">
              <img src={Plus} alt="add-icon" className="w-4" />
              <p>Assign Member</p>
            </div>
            <div className="flex gap-3">
              <div className="flex flex-col gap-1 scale-90">
                <p>Benhatta mokhttar</p>
                <p className="text-gray-500 text-[12px] text-right">
                  Administrator
                </p>
              </div>
              <img src={Avatar} alt="" className="w-10" />
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 px-5 justify-center mr-20 ">
          <div className="w-full lg:w-1/2 mt-3">
            <div className="border  border-black rounded-xl px-2 py-4">
              <p className="font-bold text-red-700 text-center    text-xl">
                Report and Analysis
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="uv" barSize={30} fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <section className="border rounded-xl  border-black mt-2 px-10 py-5">
              <div className="text-red-700 font-bold text-center text-xl">Progress</div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={dataPie}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex  flex-col gap-2 justify-center align-middle items-start ">
                <div className="flex   gap-2 w-10 items-center">
                  <div className="border inline-block bg-blue-500">
                    <p className="text-blue-500">word</p>
                  </div>
                  <div className="text-sm">Borrowed</div>
                </div>
                <div className="flex   gap-2 w-10 items-center">
                  <div className="border inline-block bg-yellow-500">
                    <p className="text-yellow-500">word</p>
                  </div>
                  <div className="text-sm">returned</div>
                </div>
                <div className="flex  gap-2 w-10 items-center">
                  <div className="border inline-block bg-[#FF8042]">
                    <p className="text-[#FF8042]">word</p>
                  </div>
                  <div className="text-sm">Still</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center   justify-center ">
      <div className="inline-flex   flex-col gap-2   px-10  mt-10  pb-10 pt-2 border   border-black rounded-md  ">
        <h1 className="ml-14 text-red-700 font-semibold text-xl text-center mr-10  ">Reports  </h1>
        <div className=" flex  items-center">
          <img src={Avatar} alt="avatarlogo " className="w-12 " />
          <div className="px-2">
            <h1>Benhatta mokhttar</h1>
            <p className="text-sm text-gray-500">i have problem with ordring books and  reqest them  please help and thanks for the support .</p>
          </div>
          <div className="border  mt-4 px-5 py-1  bg-ref-700  bg-red-700 text-white rounded-md hover:bg-white hover:border-red-600 hover:text-black">
            <button className=" flex justify-center items-center">Reply</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default LibraryData;
