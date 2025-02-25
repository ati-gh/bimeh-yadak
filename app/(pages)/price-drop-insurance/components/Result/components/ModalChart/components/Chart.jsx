import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { consoleLog_Pink, numberWithCommas } from "@/helper";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

function Index({ chartPriceList, chartMonthList }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
  let chartOption = {
    series: [
      {
        name: "قیمت",
        data: chartPriceList,
        color: "#03f2b4",
      },
    ],
    options: {
      legend: {
        show: true,
      },
      chart: {
        height: 50,
        /*   width: 30, */
        type: "area",
        color: "black",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 6,
        strokeWidth: 2,
        strokeColor: "#0491f4",
        hover: {
          size: 9,
        },
      },
      toolbar: {
        show: false,
      },
      dataLabels: {
        enabled: false,
        color: "#78909C",
      },
      stroke: {
        curve: "smooth",
        color: "#78909C",
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#0491f4"],

          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 0.6,
          opacityTo: 0.6,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        max: Math.max(...chartPriceList) + 50000000,
        min: Math.min(...chartPriceList) - 50000000,
        labels: {
          offsetX: -10,
          formatter: function (value) {
            return numberWithCommas(value);
          },
          style: {
            colors: "black",
            fontSize: "10px",
          },
        },
      },
      xaxis: {
        type: "string",
        categories: chartMonthList,
        labels: {
          style: {
            colors: "black",
            fontSize: "11px",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
          color: "black",
        },
      },
    },
  };
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    consoleLog_Pink(chartMonthList);
  }, [chartMonthList]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <ApexChart
      options={chartOption.options}
      series={chartOption.series}
      type="area"
      width={"100%"}
      height={250}
    />
  );
}

export default React.memo(Index);
