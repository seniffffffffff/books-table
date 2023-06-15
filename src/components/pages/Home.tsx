import { Box } from "@mui/material";
import TableBooks from "../HomeComp/TableBooksAll";
import BreadcrumbsComp from "../common/BreadcrumbsComp";

const Home = () => {
  return (
    <Box
      sx={{
        margin: "0 auto",
        marginTop: "50px",
        maxWidth: "900px",
      }}
    >
      <Box>
        <BreadcrumbsComp />
        <TableBooks />
      </Box>
    </Box>
  );
};

export default Home;
