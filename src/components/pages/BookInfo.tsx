import BreadcrumbsComp from "../common/BreadcrumbsComp";
import Box from "@mui/material/Box";
import BookPage from "../BookInfo/BookPage";

const BookInfo = () => {
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
        <BookPage />
      </Box>
    </Box>
  );
};

export default BookInfo;
