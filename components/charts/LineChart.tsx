"use client";
import {
  useFetchWidgetData,
  useFetchWidgetMonthlyData,
  useFetchWidgetWeeklyData,
} from "@/lib/query";
import { ApexOptions } from "apexcharts";
import clsx from "clsx";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Props } from "react-apexcharts";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    id: "lineChart",
    // events: {
    //   beforeMount: (chart) => {
    //     chart.windowResizeHandler();
    //   },
    // },
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: true,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const LineChartTwo = () => {
  const [buttonActive, setButtonActive] = React.useState(1);
  const { data, isLoading } = useFetchWidgetData(1000);
  const { data: weeklyData } = useFetchWidgetWeeklyData(1000);
  const { data: monthlyData } = useFetchWidgetMonthlyData(1000);

  const chartRef = React.useRef<typeof ReactApexChart | null>(null);
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },
    ],
  });

  React.useEffect(() => {
    console.log(data);
    if (data && weeklyData && monthlyData) {
      setState({
        series: data,
      });
    }
  }, [data, weeklyData, monthlyData]);

  const handleAllTime = () => {
    setState({
      series: data,
    });
    setButtonActive(1);
  };

  const handleWeekly = () => {
    setState({
      series: weeklyData,
    });
    setButtonActive(2);
  };

  const handleMonthly = () => {
    setState({
      series: monthlyData,
    });
    setButtonActive(3);
  };

  // // NextJS Requirement
  // const isWindowAvailable = () => typeof window !== "undefined";

  // if (!isWindowAvailable() && !isLoading) return <></>;

  return (
    <div className="h-full w-full bg-white rounded-sm">
      <div className="flex justify-end p-2 items-center rounded-md bg-whiter dark:bg-meta-4">
        <button
          className={clsx(
            buttonActive === 1 && "bg-white shadow-card",
            "rounded  py-1 px-3 text-xs font-medium text-black  hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
          )}
          onClick={handleAllTime}
        >
          Day
        </button>
        <button
          className={clsx(
            buttonActive === 2 && "bg-white shadow-card",
            "rounded  py-1 px-3 text-xs font-medium text-black  hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
          )}
          onClick={handleWeekly}
        >
          Week
        </button>
        <button
          className={clsx(
            buttonActive === 3 && "bg-white shadow-card",
            "rounded  py-1 px-3 text-xs font-medium text-black  hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
          )}
          onClick={handleMonthly}
        >
          Month
        </button>
      </div>
      <ReactApexChart
        options={options}
        type="area"
        width="100%"
        height="85%"
        series={state.series}
      />
    </div>
  );
};

export default LineChartTwo;