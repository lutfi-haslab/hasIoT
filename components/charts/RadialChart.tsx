"use client";
import { useFetchWidgetLastData } from "@/lib/query";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
      },

      dataLabels: {
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "13px",
        },
        value: {
          color: "#111",
          fontSize: "30px",
          show: true,
        },
      },
    },
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress"],
};

interface ChartOneState {
  series: number[];
}

const RadialTwo = () => {
  const { data, isLoading } = useFetchWidgetLastData(1000);
  const [state, setState] = useState<ChartOneState>({
    series: [],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;
  React.useEffect(() => {
    // setState({series: [data?.data?.y]})
    if (data) {
      console.log(data);
      setState({ ...state, series: [data.data.y] });
    }
  }, [data]);

  // // NextJS Requirement
  // const isWindowAvailable = () => typeof window !== "undefined";

  // if (!isWindowAvailable() && !isLoading) return <></>;
  // if(!isLoading) return <p>Loading...</p>

  return (
    <div className="w-full h-full bg-white rounded-sm">
      <ReactApexChart
      id="radialTwo"
      options={options}
      series={state.series}
      type="radialBar"
      width="100%"
      height="100%"
    />
    </div>
  );
};

export default RadialTwo;