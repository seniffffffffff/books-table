import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

const BreadcrumbsComp = () => {
  const location = useLocation();
  const locationName = location.pathname;
  const lettersOnly = locationName
    .replace(/[^a-zA-Z]/g, "")
    .split(/(?=[A-Z])/)
    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1));

  console.log(lettersOnly.slice(1, 3), "sss");
  console.log(lettersOnly.slice(2, lettersOnly.length), "asdas");

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon />}
      sx={{ color: "white", marginBottom: "10px" }}
    >
      <Link underline="hover" color="inherit" href="/home">
        {lettersOnly.length === 0 ? "Home" : lettersOnly[0]}
      </Link>
      {lettersOnly.length >= 3 && (
        <Link underline="hover" color="inherit" href="/books/:author">
          {`${lettersOnly.slice(1, 3).join(" ")}`}
        </Link>
      )}
      {lettersOnly.length > 3 && (
        <Typography color="text.white">
          {lettersOnly.slice(2, lettersOnly.length).join(" ")}
        </Typography>
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;
