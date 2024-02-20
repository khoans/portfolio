// import { projectsData } from "@/libs/data";
// import React, { useState } from "react";

// type ProjectProps = (typeof projectsData)[number];

// export default function Project2() {
//   const [arr, setArr] = useState([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
//     [17, 18, 19, 20],
//   ]);

//   const shiftForward = () => {
//     setArr([...arr.slice(1), arr[0]]);
//   };

//   const shiftBackward = () => {
//     setArr([arr[arr.length - 1], ...arr.slice(0, arr.length - 1)]);
//   };

//   return (
//     <div className="flex gap-3">
//       <button onClick={shiftForward}>Shift Forward</button>
//       <button onClick={shiftBackward}>Shift Backward</button>
//       {arr.slice(0, 3).map((i) => (
//         <div key={i}>
//           {i?.map((j) => (
//             <div key={j}>{j}</div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
