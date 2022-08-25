import React from "react";
import Card from "@mui/material/Card";
import CardAction from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const News = ({ article }) => {
  const { urlToImage, url, title, description, source } = article;

  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
          <CardMedia
            component="img"
            atl={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={"250"}
          />
        )}

        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardAction>
          <Link
            href={url}
            target="_blank"
            variant="button"
            width="100%"
            textAlign="center"
            sx={{
              textDecoration: "none",
              backgroundColor: "#0073ff",
              color: "#fff",
              padding: "5px",
              "&:hover": {
                backgroundColor: "#0015ff",
              },
              borderRadius: "4px"
            }}
          >
            Leer Noticia
          </Link>
        </CardAction>
      </Card>
    </Grid>
  );
};

export default News;
