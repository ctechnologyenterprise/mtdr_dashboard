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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiButton from "components/VuiButton";

// Wizard application components
import FormField from "layouts/applications/wizard/components/FormField";

// Images
import avatar from "assets/images/SimmmpleAvatar.png";

function About() {
  return (
    <VuiBox>
      <VuiBox width="80%" textAlign="center" mx="auto" mb={4}>
        <VuiBox mb={1}>
          <VuiTypography variant="h5" fontWeight="regular" color="white">
            Let&apos;s start with the basic information
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="body2" fontWeight="regular" color="text">
          Let us know your name and email address. Use an address you don&apos;t mind other users
          contacting you at
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} container justifyContent="center">
            <VuiBox position="relative" height="max-content" mx="auto">
              <VuiAvatar
                src={avatar}
                alt="profile picture"
                sx={{ width: "150px", height: "150px" }}
                variant="rounded"
              />
              <VuiBox alt="spotify logo" position="absolute" right={0} bottom={0} mr={-1} mb={-1}>
                <VuiButton
                  variant="contained"
                  color="info"
                  sx={{ borderRadius: "12px", width: "35px", height: "35px" }}
                  iconOnly
                >
                  <Icon>edit</Icon>
                </VuiButton>
              </VuiBox>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={8}>
            <VuiBox mb={2}>
              <FormField type="text" label="first name" placeholder="Eg. Michael" />
            </VuiBox>
            <VuiBox mb={2}>
              <FormField type="text" label="last name" placeholder="Eg. Tomson" />
            </VuiBox>
            <VuiBox>
              <FormField type="text" label="email address" placeholder="Eg. vision@dashboard.com" />
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

export default About;
