"use client";
import BarChartTwo from "@/components/charts/BarChart";
import LineChartTwo from "@/components/charts/LineChart";
import RadialTwo from "@/components/charts/RadialChart";
import { useFetchDashboardId, useUpdateDashboard } from "@/lib/query";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import { Heading } from "@/components/ui/heading";
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
      <Heading title={"Dashboard"} description={"Dashboard IoT Platform"} />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Link href="dashboard/test">
          <Card className="hover:bg-slate-700 hover:text-white shadow-lg">
            <CardHeader>
              <CardTitle>Site A</CardTitle>
              <CardDescription>7zAio</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sensor pada Site A</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="dashboard/test">
          <Card className="hover:bg-slate-700 hover:text-white shadow-lg">
            <CardHeader>
              <CardTitle>Site B</CardTitle>
              <CardDescription>7zAio</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Sensor pada Site B</p>
            </CardContent>
          </Card>
        </Link>
      </div>

    </div>
  );
};

export default GridLayoutTwo;