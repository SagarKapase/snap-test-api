import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import FolderIcon from "@mui/icons-material/Folder";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { DemoProvider, useDemoRouter } from "@toolpad/core/internal";
import APIDetails from "./APIDetails";
import Chip from "@mui/material/Chip";
import XmlAPIDetails from "./XmlAPI/XmlAPIDetails";
import AuthAPIDetails from "./Auth/AuthAPIDetails";
import GraphQLAPIDetails from "./GraphQL/GraphQLAPIDetails";
import LockIcon from "@mui/icons-material/Lock";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CodeIcon from "@mui/icons-material/Code";
import CoffeeIcon from "@mui/icons-material/Coffee";
import IconButton from "@mui/material/IconButton";
import { ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import Tooltip from "@mui/material/Tooltip";
import ArticleIcon from "@mui/icons-material/Article";
import DataObjectIcon from "@mui/icons-material/DataObject";
import BlogMain from "./Blogs/BlogMain";
import AboutMain from "./AboutUs/AboutMain";
import MainArea from "./Playground/MainArea";
import AttachmentIcon from "@mui/icons-material/Attachment";
import DataArrayIcon from "@mui/icons-material/DataArray";
import FormDataDetails from "./Form-Data/FormDataDetails";
import ConstructionIcon from "@mui/icons-material/Construction";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// ✅ Buy Me a Coffee Button Component
const BuyMeCoffeeButton = () => (
  <Tooltip title="Buy Me a Coffee">
    <IconButton
      color="inherit"
      component="a"
      href="https://www.buymeacoffee.com/YOUR_ID"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ mr: 1 }}
    >
      <CoffeeIcon />
    </IconButton>
  </Tooltip>
);

function DashboardLayoutBasic(props) {
  const { window } = props;

  const router = useDemoRouter("/movies/lord-of-the-rings");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // Remove this provider when copying and pasting into your project.
    <DemoProvider window={demoWindow}>
      {/* preview-start */}
      <AppProvider
        branding={{
          title: "Snap-Test.in", // <-- Change name here
        }}
        initialState={{
          navigation: { open: false }, // 👈 Collapse sidebar on first load
        }}
        navigation={[
          {
            segment: "movies",
            title: "JSON",
            icon: <DataArrayIcon />,
            children: [
              {
                segment: "get-all-users",
                title: "Get all users",
                icon: <Chip label="GET" color="success" variant="outlined" />,
              },
              {
                segment: "add-user",
                title: "Add a new user",
                icon: <Chip label="POST" color="primary" variant="outlined" />,
              },
              {
                segment: "get-user",
                title: "Get Single User",
                icon: <Chip label="GET" color="success" variant="outlined" />,
              },
              {
                segment: "update-user",
                title: "Update a user",
                icon: (
                  <Chip
                    label="PUT"
                    variant="outlined"
                    sx={{
                      color: "#673ab7",
                      borderColor: "#673ab7",
                      fontWeight: 600,
                    }}
                  />
                ),
              },
              {
                segment: "delete-user",
                title: "Delete a user",
                icon: (
                  <Chip
                    label="DELETE"
                    variant="outlined"
                    sx={{ color: "red", borderColor: "red", fontWeight: 600 }}
                  />
                ),
              },
              // {
              //     segment: 'patch-user',
              //     title: 'Patch Update User',
              //     icon: <DescriptionIcon />,
              // },
            ],
          },
          {
            segment: "auth",
            title: "Auth",
            icon: <LockIcon />,
            children: [
              {
                segment: "auth-Generate-Token",
                title: "Generate Token",
                icon: <Chip label="POST" color="primary" variant="outlined" />,
              },
              {
                segment: "auth-Authorize-User",
                title: "Authorize User",
                icon: <Chip label="GET" color="success" variant="outlined" />,
              },
            ],
          },
          {
            segment: "xml",
            title: "XML",
            icon: <CodeIcon />,
            children: [
              {
                segment: "xml-get-all-users",
                title: "Get all users",
                icon: <Chip label="GET" color="success" variant="outlined" />,
              },
              {
                segment: "xml-add-user",
                title: "Add a new user",
                icon: <Chip label="POST" color="primary" variant="outlined" />,
              },
              {
                segment: "xml-get-user",
                title: "Get Single User",
                icon: <Chip label="GET" color="success" variant="outlined" />,
              },
              {
                segment: "xml-update-user",
                title: "Update a user",
                icon: (
                  <Chip
                    label="PUT"
                    variant="outlined"
                    sx={{
                      color: "#673ab7",
                      borderColor: "#673ab7",
                      fontWeight: 600,
                    }}
                  />
                ),
              },
              {
                segment: "xml-delete-user",
                title: "Delete a user",
                icon: (
                  <Chip
                    label="DELETE"
                    variant="outlined"
                    sx={{ color: "red", borderColor: "red", fontWeight: 600 }}
                  />
                ),
              },
              // {
              //     segment: 'patch-user',
              //     title: 'Patch Update User',
              //     icon: <DescriptionIcon />,
              // },
            ],
          },
          {
            segment: "graphql",
            title: "GraphQL",
            icon: <FolderIcon />,
            children: [
              {
                segment: "graphql-demo",
                title: "Info",
                icon: <InfoIcon />,
              },
            ],
          },
          {
            segment: "form-data",
            title: "File Attachment",
            icon: <AttachmentIcon />,
          },
          {
            segment: "builder",
            title: "API Builder",
            icon: <ConstructionIcon />,
          },
          {
            segment: "blogs",
            title: "Blogs",
            icon: <ArticleIcon />,
          },
          {
            segment: "playground",
            title: "Playground",
            icon: <DataObjectIcon />,
          },
          {
            segment: "about",
            title: "About",
            icon: <InfoIcon />,
          },
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout
          slots={{
            toolbarActions: () => (
              <>
                <BuyMeCoffeeButton />{" "}
                {/* 👈 This appears BEFORE dark/light icon */}
                <ThemeSwitcher /> {/* ✅ Keep theme toggle */}
              </>
            ),
          }}
        >
          {/* <APIDetails pathname={router.pathname} /> */}
          {router.pathname.startsWith("/auth") ? (
            <AuthAPIDetails pathname={router.pathname} />
          ) : router.pathname.startsWith("/xml") ? (
            <XmlAPIDetails pathname={router.pathname} />
          ) : router.pathname.startsWith("/form-data") ? (
            <FormDataDetails pathname={router.pathname} />
          ) : router.pathname.startsWith("/graphql") ? (
            <GraphQLAPIDetails pathname={router.pathname} />
          ) : router.pathname.startsWith("/playground") ? (
            <MainArea pathname={router.pathname} />
          ) : router.pathname.startsWith("/about") ? (
            <AboutMain pathname={router.pathname} />
          ) : router.pathname.startsWith("/blogs") ? (
            <BlogMain pathname={router.pathname} />
          ) : (
            <APIDetails pathname={router.pathname} />
          )}
        </DashboardLayout>
      </AppProvider>
    </DemoProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
