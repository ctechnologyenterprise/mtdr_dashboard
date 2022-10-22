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

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function Footer() {
  return (
    <VuiBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <VuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <VuiTypography
                component="a"
                href="https://simmmple.com/"
                variant="body2"
                color="white"
              >
                Simmmple
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <VuiTypography
                component="a"
                href="https://www.creative-tim.com/"
                variant="body2"
                color="white"
              >
                Creative Tim
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <VuiTypography
                component="a"
                href="https://www.creative-tim.com/blog"
                variant="body2"
                color="white"
              >
                Blog
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <VuiTypography
                component="a"
                href="https://www.creative-tim.com/license"
                variant="body2"
                color="white"
              >
                License
              </VuiTypography>
            </VuiBox>
            <VuiBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <VuiTypography
                component="a"
                href="https://simmmple.com/about"
                variant="body2"
                color="white"
              >
                About
              </VuiTypography>
            </VuiBox>
            <VuiBox>
              <VuiTypography
                component="a"
                href="https://www.creative-tim.com/templates"
                variant="body2"
                color="white"
              >
                Products
              </VuiTypography>
            </VuiBox>
          </VuiBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <VuiBox display="flex" justifyContent="center" mt={1} mb={3}>
            <VuiBox mr={3} color="white">
              <FacebookIcon fontSize="small" />
            </VuiBox>
            <VuiBox mr={3} color="white">
              <TwitterIcon fontSize="small" />
            </VuiBox>
            <VuiBox mr={3} color="white">
              <InstagramIcon fontSize="small" />
            </VuiBox>
            <VuiBox mr={3} color="white">
              <PinterestIcon fontSize="small" />
            </VuiBox>
            <VuiBox color="white">
              <LinkedInIcon fontSize="small" />
            </VuiBox>
          </VuiBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <VuiTypography variant="body2" color="white">
            @2021, Made with &#10084; by <strong>Creative Tim </strong>and <strong>Simmmple</strong>{" "}
            for a better web
          </VuiTypography>
        </Grid>
      </Grid>
    </VuiBox>
  );
}

export default Footer;
