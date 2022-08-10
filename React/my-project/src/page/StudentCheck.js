import React, { useState } from "react";

import Header from "./header";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

const StudentCheck = () => {
  const [selectID, setSelectID] = useState(null);
  const subject = [
    {
      title : "OS" ,
      status : "1"
    } , 
    {
      title : "Algorithm" ,
      status : "1"
    } , 
    {
      title : "A"
    }
  ]
  return (
    <div className="h-screen  bg-main-green flex justify-center items-center">
      <div className="relative w-5/6 p-5 h-5/6 bg-slate-100 rounded-lg flex-row justify-center items-center  overflow-auto">
        <div className="flex flex-wrap w-full h-12 justify-content-center items-center">
          <div>
            <img
              className="w-48 max-w-full  align-middle mx-8  "
              src="../img/logoMEDCMUen-1280x227.png"
              alt="med"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="62061xxxx , charnnarong"
              className="rounded-md w-96 h-9 bg-gray-light p-2"
            />
            <button   className="inline-block
                  px-4 py-1 rounded-lg
  
                  bg-main-green  
                ">SUBMIT</button>
          </div>
        </div>
          
        <div>
           <table class="table-auto" className="mx-auto w-5/6 ">
            <thead>
              <tr>
                <th>Song</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
         
       
      </div>

      {/* <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          className="rounded-md w-60 bg-gray-light gap-y-10"
          value={searchID}
        /> */}
    </div>
  );
};

export default StudentCheck;
