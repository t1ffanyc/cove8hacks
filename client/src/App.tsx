import React, { useState } from "react";
import "./App.css";
import SignUp from "SignUp";
import { AuthProvider } from "context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import SignIn from "SignIn";
const queryClient = new QueryClient();
// interface Course {
//   id: number;
//   name: string;
// }

// interface Quarter {
//   year: number;
//   quarter: string;
//   courses: Course[];
// }

const App: React.FC = () => {
    // const [planner, setPlanner] = useState<Quarter[]>([...generatePlanner()]);

    // // Helper function to generate a blank planner
    // function generatePlanner(): Quarter[] {
    //   const years = [1, 2]; // Only Freshman and Sophomore years
    //   const quarters = ["Fall", "Winter", "Spring", "Summer"];
    //   const planner: Quarter[] = [];

    //   years.forEach((year) => {
    //     quarters.forEach((quarter) => {
    //       planner.push({
    //         year,
    //         quarter,
    //         courses: [],
    //       });
    //     });
    //   });

    //   return planner;
    // }

    // const handleAddCourse = (year: number, quarter: string, courseName: string) => {
    //   setPlanner((prevPlanner) =>
    //     prevPlanner.map((qtr) => {
    //       if (qtr.year === year && qtr.quarter === quarter) {
    //         return {
    //           ...qtr,
    //           courses: [
    //             ...qtr.courses,
    //             { id: Date.now(), name: courseName },
    //           ],
    //         };
    //       }
    //       return qtr;
    //     })
    //   );
    // };

    // const handleRemoveCourse = (year: number, quarter: string, courseId: number) => {
    //   setPlanner((prevPlanner) =>
    //     prevPlanner.map((qtr) => {
    //       if (qtr.year === year && qtr.quarter === quarter) {
    //         return {
    //           ...qtr,
    //           courses: qtr.courses.filter((course) => course.id !== courseId),
    //         };
    //       }
    //       return qtr;
    //     })
    //   );
    // };

    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <SignUp/>
            </AuthProvider>
        </QueryClientProvider>

        // <div className="flex flex-col items-center p-6">
        //   <h1 className="text-2xl font-bold mb-6">Two-Year Course Planner</h1>
        //   <div className="flex w-full max-w-4xl">
        //     {[1, 2].map((year) => (
        //       <div
        //         key={year}
        //         className="flex-1 p-4 border rounded bg-gray-100 shadow mx-2"
        //       >
        //         <h2 className="text-lg font-semibold">
        //           {year === 1 ? "Freshman Year" : "Sophomore Year"}
        //         </h2>
        //         <div className="grid gap-4 mt-4">
        //           {planner
        //             .filter((qtr) => qtr.year === year)
        //             .map((qtr) => (
        //               <div key={qtr.quarter} className="">
        //                 <h3 className="text-md font-medium">{qtr.quarter}</h3>
        //                 <ul className="mt-2">
        //                   {qtr.courses.map((course) => (
        //                     <li
        //                       key={course.id}
        //                       className="flex justify-between items-center"
        //                     >
        //                       {course.name}
        //                       <button
        //                         className="text-red-500 hover:underline"
        //                         onClick={() =>
        //                           handleRemoveCourse(
        //                             qtr.year,
        //                             qtr.quarter,
        //                             course.id
        //                           )
        //                         }
        //                       >
        //                         Remove
        //                       </button>
        //                     </li>
        //                   ))}
        //                 </ul>
        //                 <input
        //                   type="text"
        //                   placeholder="Add a course"
        //                   className="mt-2 w-full p-2 border rounded"
        //                   onKeyDown={(e) => {
        //                     if (
        //                       e.key === "Enter" &&
        //                       e.currentTarget.value.trim() !== ""
        //                     ) {
        //                       handleAddCourse(
        //                         qtr.year,
        //                         qtr.quarter,
        //                         e.currentTarget.value
        //                       );
        //                       e.currentTarget.value = "";
        //                     }
        //                   }}
        //                 />
        //               </div>
        //             ))}
        //         </div>
        //       </div>
        //     ))}
        //   </div>
        // </div>
    );
};

export default App;
