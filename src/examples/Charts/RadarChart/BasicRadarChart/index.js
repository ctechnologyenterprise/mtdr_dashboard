import React from "react";
import ReactApexChart from "react-apexcharts";

class BasicRadarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.radarChartData,
      chartOptions: this.props.radarChartOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="radar"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BasicRadarChart;