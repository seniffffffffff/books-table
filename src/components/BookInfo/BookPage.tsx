import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import Loader from "../common/Loader";
import spareBookImg from "../../assets/spareBookImg.png";

const BookPage = () => {
  const { bookInfo, loading } = useTypedSelector((state) => state.bookInfo);

  const { fetchBookInfo } = useActions();

  useEffect(() => {
    const storedData = localStorage.getItem("idBook");

    if (storedData !== null) {
      const parsedData = JSON.parse(storedData);
      fetchBookInfo(parsedData.id);
    }

    return () => {
      localStorage.removeItem("idBook");
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {bookInfo &&
        bookInfo.map((item) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "white",
            }}
            key={item?.id}
          >
            <Typography variant="h3" gutterBottom>
              {item?.volumeInfo.title}
            </Typography>
            <img
              src={item.volumeInfo.imageLinks?.thumbnail || spareBookImg}
              alt="book cover"
              style={{ maxWidth: "250px", maxHeight: " 400px" }}
            />
            <Box sx={{ marginTop: "20px" }}>
              {item.volumeInfo.categories || "loremloremloremloremloremlorem"}
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              {(
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.volumeInfo.description,
                  }}
                />
              ) ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus hic quo consequuntur sed, eligendi suscipit sunt nisi quidem adipisci libero voluptatem asperiores consequatur laborum eius reprehenderit itaque commodi soluta voluptatum?"}{" "}
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              Page count:{" "}
              {item.volumeInfo.pageCount ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </Box>
            <Button
              variant="contained"
              sx={{
                maxWidth: "250px",
                maxHeight: " 400px",
                marginTop: "20px",
              }}
            >
              <Link
                href={item?.volumeInfo.infoLink}
                sx={{ color: "white", "&:hover": { textDecoration: "none" } }}
              >
                More Info
              </Link>
            </Button>
          </Box>
        ))}
    </>
  );
};

export default BookPage;
