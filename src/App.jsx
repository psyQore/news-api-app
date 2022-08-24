import { Container, Typography, Grid } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <Container>
      <header>
        <Typography align="center" marginY={5} component="h2" variant="h3">
          Buscador de Noticias
        </Typography>
      </header>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={6} xs={12} lg={4}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
