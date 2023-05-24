
import React from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import axios from "axios";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchChartData = async () => {
  const response = await axios.get("https://disease.sh/v3/covid-19/historical/all?lastdays=all");
  const data = response.data;
  const chartData = {
    labels: Object.keys(data.cases || []),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data.cases || []),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: !!data?.deaths && Object.values(data?.deaths),
        borderColor: "rgb(55, 199, 92)",
        backgroundColor: "rgba(255, 199, 92, 0.5)",
      },
      {
        label: "Recovered",
        data: !!data?.recovered && Object.values(data?.recovered),
        borderColor: "rgb(155, 89, 102)",
        backgroundColor: "rgba(155, 89, 102, 0.5)",
      },
    ],
  };
  return chartData;
};

const LineGraph: React.FC = () => {
  const { data: chartData, isLoading, error } = useQuery("chartData", fetchChartData);

  if (isLoading) {
    return <div>Loading chart...</div>;
  }

  if (error) {
    return <div>Error fetching chart data</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <div className="w-9/12">
      {chartData && <Line options={options} data={chartData} />}
    </div>
  );
};

export default LineGraph;



