import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
interface Cases {
  [date: string]: number;
}
interface deaths {
  [date: string]: number;
}
interface recovered {
  [date: string]: number;
}

interface GraphData {
  cases: Cases;
  deaths: deaths;
  recovered: recovered;
}

const fetchGraphData = async (): Promise<GraphData> => {
  const { data } = await axios.get<GraphData>("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  return data;
};

// const aggregateDataByDay = (cases: Cases) => {
//   return Object.keys(cases).map(date => ({
//     date,
//     cases: cases[date]
//   }));
// };

function Chart_Map() {
  const { data, error, isLoading } = useQuery<GraphData, Error>({
    queryKey: ['cases'],
    queryFn: fetchGraphData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
  console.log(data);
  
  // const chartData = aggregateDataByDay(data?.cases || {});
  const chartData = data?.cases || {}
  const chartDataDeaths = data?.deaths || {}
  const chartDataRecovered = data?.recovered || {}
  console.log(chartDataRecovered);
  
  if(chartData==undefined || chartDataDeaths==undefined ||chartDataRecovered==undefined)
    return<>Loading...</>
  
  const lb=[]
  const dt=[]
  const death_cases=[]
  const death_date=[]
  const recovered_cases=[]
  const recovered_date=[]
 for(let key in chartData){

  lb.push(key)
  dt.push(chartData[key])
  
 }
 for(let key in chartDataDeaths){
 
  death_date.push(key)
  death_cases.push(chartDataDeaths[key])
  
 }
 for(let key in chartDataRecovered){
 
  recovered_date.push(key)
  recovered_cases.push(chartDataRecovered[key])
  
 }
  
  // for(let i=0;i<chartData.length;i++){
  //   lb.push(chartData[i].date)
  //   dt.push(chartData[i].cases)

  // }
  
  // // const lb=[]
  // console.log(chartData.keys());
  
  const lineState = {

    labels: lb,
    datasets: [
      {
        label: "TOTAL CASES",
        backgroundColor: ["gray"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: dt,
      },
    ],
  };
  
  const deathState = {

    labels: death_date,
    datasets: [
      {
        label: "TOTAL DEATH CASES",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: death_cases,
      },
    ],
  };
  const recoveredState = {

    labels: recovered_date,
    datasets: [
      {
        label: "TOTAL RECOVERED CASES",
        backgroundColor: ["green"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: recovered_cases,
      },
    ],
  };
  return (
    <>
{
      (death_cases.length>0 && recovered_cases.length>0 && dt.length>0 )?
      <div className=' md:flex md:flex-row md:flex-wrap md:justify-center md:w-[79vw] md:h-[90vh] md:text-center md:absolute md:top-[10vh] md:left-[21vw]
      bg-white-300 md:border-2 md:border-gray-400  md:text-[4vh] p-[6vh] w-[98vw] absolute top-[60vh] text-[5vh] text-center h-auto  text-[#0052A2]'>
     
     <div className="lineChart h-[30vh] w-[30vw] max-md:w-full max-md:h-[60vh]">
          <Chart type="line" data={lineState} />
        </div>
     <div className="lineChart h-[30vh] w-[30vw] max-md:w-full max-md:h-[60vh]">
          <Chart type="line" data={deathState} />
        </div>
     <div className="lineChart h-[30vh] w-[30vw] max-md:w-full max-md:h-[60vh]">
          <Chart type="line" data={recoveredState} />
        </div>
    </div>:
    <>Loading...</>
    }
    </>
    
    
  )
    
}

export default Chart_Map;


