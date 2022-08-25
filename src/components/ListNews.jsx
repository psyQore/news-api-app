import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNews from "../hooks/useNews";
import News from "./News";

const ListNews = () => {
  const { news, totalNews, handleChangePage, page } = useNews();

  const totalPages = Math.ceil(totalNews / 20);

  return (
    <>
      <Typography textAlign="center" marginY={5} variant="h3" component={"h2"}>
        Últimas Noticias
      </Typography>

      <Grid container spacing={2}>
        {news.map((article) => (
          <News key={article.url} article={article} />
        ))}
      </Grid>

      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          marginY: 5,
        }}
      >
        <Pagination
          size="large"
          count={totalPages}
          color="primary"
          onChange={handleChangePage}
          page={page}
        />
      </Stack>
    </>
  );
};

export default ListNews;
