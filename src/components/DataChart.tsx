import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { memo } from "react";
const DataChart = (props) => {
  Chart.register(ArcElement);
  console.log(props.data);
  const randomColor = (): string[] => {
    const barColors: string[] = [];
    for (let i = 0; i < props.data.length; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      barColors.push("#" + randomColor);
    }
    return barColors;
  };
  const getDataDevice = (): number[] => {
    const result: number[] = props.data.map(
      (device) => device.powerConsumption
    );

    return result;
  };
  const getDataName = (): string[] => {
    const result: string[] = props.data.map((device) => device.name);
    console.log(result);
    return result;
  };

  const dataChart = {
    labels: getDataName(),
    datasets: [
      {
        label: "My First Dataset",
        data: getDataDevice(),
        backgroundColor: randomColor(),
        hoverBackgroundColor: randomColor(),
      },
    ],
  };

  return <DoughnutChart data={dataChart} />;
};
export default memo(DataChart);
