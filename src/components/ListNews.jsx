import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useNews from "../hooks/useNews";
import News from "./News";

const ListNews = () => {
  const { news } = useNews();

  console.log(news)

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
    </>
  );
};

export default ListNews;
