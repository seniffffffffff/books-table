import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useLocation } from "react-router-dom";
import { useActions } from "../../hooks/useAction";

const BreadcrumbsComp = () => {
  const { fetchAuthorBooks } = useActions();

  const location = useLocation();
  const locationName = location.pathname;
  const pathSegments = locationName.substring(1).split("/");

  const breadcrumbs = pathSegments.map((segment) =>
    decodeURIComponent(segment.charAt(0).toUpperCase() + segment.slice(1))
  );

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon />}
      sx={{ color: "white", marginBottom: "10px" }}
    >
      <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
        {breadcrumbs[0]}
      </Link>
      {breadcrumbs[1] ? (
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/books/${breadcrumbs[1]}`}
          onClick={() => {
            fetchAuthorBooks(breadcrumbs[1]);
          }}
        >
          {`${breadcrumbs[1]}`}
        </Link>
      ) : (
        ""
      )}
      {breadcrumbs[2] ? (
        <Typography color="text.white">{breadcrumbs[2]}</Typography>
      ) : (
        ""
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComp;
