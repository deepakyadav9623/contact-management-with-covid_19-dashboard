
import { useState } from "react";
import LineGraph from "./LineGraph";
import Map from "./Map";

const ChartAndMap = () => {
  const [graph, setGraph] = useState(true)

  return (
    <div className="">
      <div className="flex">
      <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
      <div className="text-center ml-48">
        <button
          className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setGraph(true)
          }}
        >
          Graph
        </button>
        <button
          className="bg-sky-500 hover:bg-blue-700 ml-8 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setGraph(false)
          }}
        >
          Map
        </button>
      </div>
      </div>
      {graph ? <div>
        <h4 className="text-xl font-bold mb-2">Cases Fluctuations</h4>
        <LineGraph />
      </div> :
        <div>
          <h2 className="text-xl font-bold mb-2">World Map</h2>
          <Map />
        </div>}
    </div>
  )
}
export default ChartAndMap;
