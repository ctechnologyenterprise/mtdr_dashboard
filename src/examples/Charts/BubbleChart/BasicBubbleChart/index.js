import React, { Component } from "react";
import Chart from "react-apexcharts";

class BasicBubbleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.bubbleChartData,
      chartOptions: this.props.bubbleChartOptions,
    });
  }

  render() {
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="bubble"
        width="100%"
        height="100%"
      />
    );
  }
}

export default BasicBubbleChart;