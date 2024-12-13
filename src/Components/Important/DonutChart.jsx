import React from "react";
import ReactApexChart from "react-apexcharts";

const DonutChart = ({ dataColors, series, labels }) => {
  const getChartColorsArray = (colors) => {
    return colors;
  };

  const chartDonutBasicColors = getChartColorsArray(dataColors);
  const options = {
    labels: labels,
    chart: {
      height: 333,
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      dropShadow: {
        enabled: false,
      },
    },
    colors: chartDonutBasicColors,
  };

  return (
    <>
      {series?.length === 0 ? (
        <span>Data Not Available</span>
      ) : (
        <ReactApexChart
          dir="ltr"
          options={options}
          series={series}
          type="donut"
          height="333"
          className="apex-charts"
        />
      )}
    </>
  );
};

export default DonutChart;
