import APIservice from "../../APIservice";
import * as d3 from "d3";
import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import { toast } from "react-toastify";
const Graph = () => {
  let {
    state: { user },
  } = useContext(Context);
  let [week, setWeek] = useState(1);

  useEffect(async () => {
    let result = await APIservice.getTasks(user, week);
    try {
      let tasks = result.data.tasks;
      let data = [];
      for (let i = 0; i < 7; i++) {
        data.push(tasks[i]);
      }
      let svg = d3.select("svg.graph");
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", "10%")
        .attr("x", (d, index) => index * 15 + "%")
        .attr("y", (d) => 30 + (256 * (10 - d.length)) / 10)
        .attr("height", (d) => 256 * (d.length / 10))
        .attr("class", (d) => {
          if (d.length >= 3) return "fill-green";
          else if (d.length >= 2) return "fill-orange-500";
          else return "fill-red-600";
        });

      svg
        .selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d, index) => {
          if (index == 6) return "Ing";
          else return d.length === 0 ? "-" : d.length;
        })
        .attr("text-anchor", "middle")
        .attr("fill", (d) => {
          if (d.length == 1) return "red";
          else if (d.length >= 3) return "green";
          else return "orange";
        })
        .attr("x", (d, index) => 5 + index * 15 + "%")
        .attr("y", 30)
        .attr("font-size", "24px")
        .attr("font-family", "Noto Sans TC");
      svg
        .selectAll("text.time")
        .data(data)
        .enter()
        .append("text")
        .text((d, index) => {
          if (index == 6) return "-";
          else if(d.length) return d.map(ele=>ele.time).reduce((a,b)=>a+b)+"m"
          else return "-"
        })
        .attr("text-anchor", "middle")
        .attr("fill", (d) => {
          if (d.length == 1) return "red";
          else if (d.length >= 3) return "green";
          else return "orange";
        })
        .attr("x", (d, index) => 5 + index * 15 + "%")
        .attr("y", 48)
        .attr("font-size", "16px")
        .attr("font-family", "Noto Sans TC");
    } catch (err) {
      console.log(err);
      toast.error(
        <div>
          Something happened!
          <br />
          Please try again later
        </div>
      );
    }
  });

  return (
    <div className=" dark:bg-black bg-[#fff]   border-1  rounded-3xl rounded-tl-none dark:border-white    h-full items-center p-2 lg:p-5 justify-between shadow-xl">
      <h1 className="display-6 text-center dark:text-white mb-3">
        Week Complete Task
      </h1>
      <svg className="graph w-full lg:w-4/5 h-72 mx-auto "></svg>
    </div>
  );
};

export default Graph;
