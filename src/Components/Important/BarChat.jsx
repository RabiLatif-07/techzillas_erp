import React from "react";
import getChartColorsArray from "../../Components/Common/ChartsDynamicColor";
import ReactApexChart from "react-apexcharts";


const BarChart = ({ Series, title, color }) => {

  const BasicAreaCharts = ({ dataColors }) => {
    const areachartSplineColors = getChartColorsArray(dataColors);
    return (
      <React.Fragment>
        <ReactApexChart
          dir="ltr"
          options={{
            ...Series?.options,
            colors: areachartSplineColors,
            stroke: {
              curve: "smooth",
              width: 2,
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: 'dark',    
                type: 'vertical',   
                gradientToColors: ['#FF0000', '#00FF00'],
                stops: [0, 100],     
                opacityFrom: 0.5,  
                opacityTo: 0.1,    
              },
              opacity: 0.1,
            },
            grid: {
              borderColor: "#e0e0e0",
              strokeDashArray: 0,
              position: "back",
              xaxis: {
                lines: {
                  show: true,
                  borderColor: "#FF0000",
                  strokeDashArray: 0,
                },
              },
              yaxis: {
                lines: {
                  show: true,
                  borderColor: "#00FF00",
                  strokeDashArray: 0,
                },
              },
            },
          }}
          series={Series?.series}
          type="area"
          height="350"
          className="apex-charts"
        />
      </React.Fragment>
    );
  };

  return (
    <BasicAreaCharts dataColors={color} />
  );
};

export default BarChart;
