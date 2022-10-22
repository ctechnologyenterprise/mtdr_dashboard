/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import breakpoints from "assets/theme/base/breakpoints";
// Vision UI Dashboard PRO React base styles
import typography from "assets/theme/base/typography";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import Footer from "examples/Footer";
import Globe from "examples/Globe";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesTable from "examples/Tables/SalesTable";
// Data
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import ActiveUsers from "./components/ActiveUsers";
import SalesOverview from "./components/SalesOverview";

// icons
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { IoWallet, IoDocumentText } from "react-icons/io5";

function Default() {
  const { values } = breakpoints;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <Grid container>
          <Grid item xs={12} lg={7}>
            <VuiBox mb={3} p={1}>
              <VuiTypography
                variant={window.innerWidth < values.sm ? "h3" : "h2"}
                textTransform="capitalize"
                fontWeight="bold"
                color="white"
              >
                general statistics
              </VuiTypography>
            </VuiBox>
            <Grid container>
              <Grid item xs={12}>
                <Globe
                  display={{ xs: "none", md: "block" }}
                  position="absolute"
                  top="10%"
                  right={0}
                  mt={{ xs: -12, lg: 1 }}
                  mr={{ xs: 0, md: -10, lg: 10 }}
                  canvasStyle={{ marginTop: "3rem" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12} md={5} lg={6} xl={5}>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "today's money", fontWeight: "bold" }}
                    count="$53,000"
                    percentage={{ color: "success", text: "+55%" }}
                    icon={<IoWallet color="white" />}
                  />
                </VuiBox>
                <MiniStatisticsCard
                  title={{ text: "today's users", fontWeight: "bold" }}
                  count="2,300"
                  percentage={{ color: "success", text: "+3%" }}
                  icon={<BsGlobe color="white" />}
                />
              </Grid>
              <Grid item xs={12} md={5} lg={6} xl={5}>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "new clients", fontWeight: "bold" }}
                    count="+3,462"
                    percentage={{ color: "error", text: "-2%" }}
                    icon={<IoDocumentText color="white" />}
                  />
                </VuiBox>
                <VuiBox mb={3}>
                  <MiniStatisticsCard
                    title={{ text: "sales", fontWeight: "bold" }}
                    count="$103,430"
                    percentage={{ color: "success", text: "+5%" }}
                    icon={<FaShoppingCart color="white" />}
                  />
                </VuiBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={10} lg={8.5} xl={7}>
            <Grid item xs={12} lg={10}>
              <Card>
                <SalesTable title="Sales by Country" rows={salesTableData} />
              </Card>
            </Grid>
          </Grid>
          <Grid container spacing={3} mt="2px">
            <Grid item xs={12} lg={6} xl={5}>
              <ActiveUsers />
            </Grid>
            <Grid item xs={12} lg={6} xl={7}>
              <SalesOverview />
            </Grid>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
