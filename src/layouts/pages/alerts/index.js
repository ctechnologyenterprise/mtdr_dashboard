/**
=========================================================
* Vision UI Dashboard PRO React - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/Vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAlert from "components/VuiAlert";
import VuiButton from "components/VuiButton";
import VuiSnackbar from "components/VuiSnackbar";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Alerts() {
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);

  const alertContent = (name) => (
    <VuiTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <VuiTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </VuiTypography>
      . Give it a click if you like.
    </VuiTypography>
  );

  const renderSuccessSB = (
    <VuiSnackbar
      color="success"
      icon="check"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
    />
  );

  const renderInfoSB = (
    <VuiSnackbar
    color="info"
      icon="notifications"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={infoSB}
      onClose={closeInfoSB}
      close={closeInfoSB}
    />
  );

  const renderWarningSB = (
    <VuiSnackbar
      color="warning"
      icon="star"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={warningSB}
      onClose={closeWarningSB}
      close={closeWarningSB}
    />
  );

  const renderErrorSB = (
    <VuiSnackbar
      color="error"
      icon="warning"
      title="Vision UI Dashboard"
      content="Hello, world! This is a notification message"
      dateTime="11 mins ago"
      open={errorSB}
      onClose={closeErrorSB}
      close={closeErrorSB}
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox mt={6} mb={3}>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <Card>
              <VuiBox mb="24px">
                <VuiTypography variant="lg" color="white" fontWeight="bold">Alerts</VuiTypography>
              </VuiBox>
              <VuiBox>
                <VuiAlert color="primary" dismissible>
                  {alertContent("primary")}
                </VuiAlert>
                <VuiAlert color="secondary" dismissible>
                  {alertContent("secondary")}
                </VuiAlert>
                <VuiAlert color="success" dismissible>
                  {alertContent("success")}
                </VuiAlert>
                <VuiAlert color="error" dismissible>
                  {alertContent("error")}
                </VuiAlert>
                <VuiAlert color="warning" dismissible>
                  {alertContent("warning")}
                </VuiAlert>
                <VuiAlert color="info" dismissible>
                  {alertContent("info")}
                </VuiAlert>
                <VuiAlert color="lightblue" dismissible>
                  {alertContent("lightblue")}
                </VuiAlert>
                <VuiAlert color="dark" dismissible>
                  {alertContent("dark")}
                </VuiAlert>
              </VuiBox>
            </Card>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Card>
              <VuiBox  lineHeight={0} display="flex" flexDirection="column" mb="24px">
                <VuiTypography variant="lg" color="white" fontWeight="bold">Notifications</VuiTypography>
                <VuiTypography variant="button" color="text" fontWeight="regular">
                  Notifications on this page use Toasts from Bootstrap. Read more details here.
                </VuiTypography>
              </VuiBox>
              <VuiBox >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={3}>
                    <VuiButton variant="contained" color="success" onClick={openSuccessSB} fullWidth>
                      success notification
                    </VuiButton>
                    {renderSuccessSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <VuiButton variant="contained" color="info" onClick={openInfoSB} fullWidth>
                      info notification
                    </VuiButton>
                    {renderInfoSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <VuiButton variant="contained" color="warning" onClick={openWarningSB} fullWidth>
                      warning notification
                    </VuiButton>
                    {renderWarningSB}
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <VuiButton variant="contained" color="error" onClick={openErrorSB} fullWidth>
                      error notification
                    </VuiButton>
                    {renderErrorSB}
                  </Grid>
                </Grid>
              </VuiBox>
            </Card>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Alerts;
