// import React from "react";
// import { ReacthOM } from "react";
// import { DumyData } from "./DumyDatatTest/DatatTest";
// function StudentList() {
//   return (
//     <>
//     <div className="bg-white ml-10 px-10 shadow-md rounded-md py-2 overflow-y-scroll">
//       <h1>Student List</h1>
//       <table className="w-full overflow-y-scroll" style={{ maxHeight: "300px" }}>
//         <thead className="border bg-gray-100 overflow-y-scroll">
//           <tr>
//             <th className="px-5 py-2 border">Id_Student</th>
//             <th className="px-5 py-2 border">Full Name</th>
//             <th className="px-5 py-2 border">Section</th>
//             <th className="px-5 py-2 border">Phone Number</th>
//             <th className="px-5 py-2 border">Level</th>
          
//           </tr>
//         </thead>
//         <tbody className="overflow-y-scroll">
//           {DumyData.map((element, index) => (
//             <tr key={index} className="bg-white">
//               <th className="py-2 px-5 font-normal">{element.id_Student}</th>
//               <th className="py-2 px-5 font-normal">{element.Name}</th>
//               <th className="py-2 px-5 font-normal">{element.Section}</th>
//               <th className={element.Status === "Borrowed" ? "py-2 px-5 text-red-600 font-normal" : "py-2 px-5 text-green-600 font-normal"}>
//                 {element.Status}
//               </th>
//               <th className="py-2 px-5 font-normal">{element.Date}</th>
        
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </>
// );
// }
// export default StudentList;
