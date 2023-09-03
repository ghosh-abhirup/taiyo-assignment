import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress, Link } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

interface DataProps {
  [key: string]: number;
}

interface ResponseProps {
  cases: DataProps;
  deaths: DataProps;
  recovered: DataProps;
}

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineGraph = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["lineGraph"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      return data;
    },
  });

  const casesChartData = {
    labels: Object.keys(data?.cases || {}),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data?.cases || {}),
        backgroundColor: "transparent",
        borderColor: "white",
        pointBorderColor: "white",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const recoveredChartData = {
    labels: Object.keys(data?.recovered || {}),
    datasets: [
      {
        label: "Recovered",
        data: Object.values(data?.recovered || {}),
        backgroundColor: "transparent",
        borderColor: "green",
        pointBorderColor: "green",
        fill: false,
        tension: 0.4,
      },
    ],
  };
  const deathsChartData = {
    labels: Object.keys(data?.deaths || {}),
    datasets: [
      {
        label: "Deaths",
        data: Object.values(data?.deaths || {}),
        backgroundColor: "transparent",
        borderColor: "red",
        pointBorderColor: "red",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  if (isLoading) {
    return (
      <CircularProgress
        sx={{
          color: "white",
          fontSize: { xs: "20px", sm: "28px" },
        }}
      />
    );
  }

  return (
    <>
      {data && (
        <div className="w-full sm:w-[80%] h-full mx-auto px-4 sm:px-8">
          <div className="w-full max-h-[200px] sm:max-h-[500px] mt-10 mb-[80px]">
            <p className="mb-6 w-full text-white text-lg sm:text-2xl font-semibold">
              Cases of Covid-19 per day
            </p>
            <Line
              data={casesChartData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="w-full max-h-[200px] sm:max-h-[500px] mt-10 mb-[80px]">
            <p className="mb-6 w-full text-white text-lg sm:text-2xl font-semibold">
              Deaths per day
            </p>
            <Line
              data={deathsChartData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="w-full max-h-[200px] sm:max-h-[500px] mt-10 mb-[80px]">
            <p className="mb-6 w-full text-white text-lg sm:text-2xl font-semibold">
              Recovered per day
            </p>
            <Line
              data={recoveredChartData}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LineGraph;
