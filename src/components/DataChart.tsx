import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { memo } from "react";
const DataChart = (props) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const backgroundColors: string[] = [];
  const borderColor: string[] = [];
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
  for (let i = 0; i < props.data.length; i++) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    backgroundColors.push("#" + randomColor + 60);
    borderColor.push("#" + randomColor);
  }
  const dataChart = {
    labels: props.data.map((device) => device.name),
    datasets: [
      {
        label: "My First Dataset",
        data: getDataDevice(),
        backgroundColor: backgroundColors,
        hoverBackgroundColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={dataChart} />;
};
export default memo(DataChart);
