"use client";
import BreadCrumb from "@/components/breadcrumb";
import BarChartTwo from "@/components/charts/BarChart";
import LineChartTwo from "@/components/charts/LineChart";
import RadialTwo from "@/components/charts/RadialChart";
import { useFetchDashboardId, useUpdateDashboard } from "@/lib/query";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ResponsiveReactGridLayout: any = WidthProvider(Responsive);
const GridLayoutTwo = () => {
  const { data, isLoading } = useFetchDashboardId();
  const { trigger, isMutating } = useUpdateDashboard();
  const [editState, setEdit] = React.useState(false);
  const [layouts, setLayout] = React.useState<object>();

  const onLayoutChange = (layout: any, layouts: any) => {
    console.log(layout);
    console.log(layouts);
    setLayout(layouts);
  };

  const updateLayout = async () => {
    await trigger({ layouts });
  };

  React.useEffect(() => {
    if (!isMutating) {
      setEdit(false);
    }
    console.log(data);
  }, [isMutating, data]);

  // const isWindowAvailable = () => typeof window !== "undefined";

  // if (!isWindowAvailable() && !isLoading) return <></>;
  
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <BreadCrumb items={[{ title: "Detail", link: "/dashboard/detail" }]} />
      <div
        className={clsx(
          "w-full",
          editState ? " bg-gradient-to-r from-cyan-500 to-blue-500" : ""
        )}
      >
        <div className="flex p-3 justify-end space-x-3">
          {editState && (
            <button
              className="inline-flex items-center justify-center rounded-md bg-meta-3 py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4"
              onClick={updateLayout}
            >
              Save
            </button>
          )}
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-4"
            onClick={() => (editState ? setEdit(false) : setEdit(true))}
          >
            {editState ? "Close Edit" : "Edit"}
          </button>
        </div>
        {!isLoading && (
          <ResponsiveReactGridLayout
            isDraggable={editState}
            isResizable={editState}
            items={20}
            rowHeight={30}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            className="layout"
            layouts={data?.layouts || {}}
            onLayoutChange={(layout: any, layouts: any) =>
              onLayoutChange(layout, layouts)
            }
          >
            <div
              key="1"
              // data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
              className="bg-red-400"
            >
              <BarChartTwo />
            </div>
            <div
              key="2"
              // data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
              className="bg-red-400"
            >
              <LineChartTwo />
            </div>
            <div
              key="3"
              // data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
              className="bg-red-400"
            >
              <RadialTwo />
            </div>
            <div
              key="4"
              // data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
              className="bg-red-400"
            >
              <span className="text">4</span>
            </div>
            <div
              key="5"
              // data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}
              className="bg-red-400"
            >
              <span className="text">5</span>
            </div>
          </ResponsiveReactGridLayout>
        )}
      </div>
    </div>

  );
};

export default GridLayoutTwo;