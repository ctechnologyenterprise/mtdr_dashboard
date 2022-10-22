/**
=========================================================
* Vision UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.
*/

import { useRef, useEffect, useState, useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Chart({ title, count, percentage, chart }) {
  
  const [chartData, setChartData] = useState([...data]);
  const [chartOptions, setChartOptions] = useState({...options});

  useEffect(() => {
    setChartData(data);
    setChartOptions(options);
  }, [chartData, chartOptions]);

  return (
    <Card>
      <VuiBox p={2}>
        <VuiTypography variant="button" textTransform="capitalize" fontWeight="medium" color="text">
          {title}
        </VuiTypography>
        <VuiTypography variant="h5" fontWeight="bold" color="dark">
          {count}&nbsp;
          <VuiTypography variant="button" fontWeight="bold" color={percentage.color}>
            {percentage.label}
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox sx={{maxHeight: "150px"}}>
        {
          useMemo(() => (
            <BasicLineChart lineChartData={chartData} lineChartOptions={chartOptions}/>
          ), [data, options])
        }
      </VuiBox>
    </Card>
  );
}

// Typechecking props for the Chart
Chart.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  }).isRequired,
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  options: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Chart;
