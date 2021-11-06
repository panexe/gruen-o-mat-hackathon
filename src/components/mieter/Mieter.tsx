import {  CardMedia, Divider, Grid, Typography } from "@mui/material";
import Questions from "../ui /questions/Questions";

const steps = [
  {
    label: "Frage 1 | Garten",
    showIfNo: true,
    description: `Hat deine Wohnung einen Garten`,
    returnYes: "Super! Dann können sie Blumen pflanzen.",
    returnNo: "Schade. Informationen zu Städgärten in ihrer Nähe gibt es...",
    componentYes: (
      <CardMedia
        component="img"
        sx={{width:'300px', marginRight: 'none', marginLeft: 'auto'}}
        image="https://upload.wikimedia.org/wikipedia/commons/e/ec/Blume_mit_Schmetterling_und_Biene_1uf.JPG"
        alt="green iguana"
      />
    ),
    componentNo: (
        <CardMedia
          component="img"
          sx={{width:'300px'}}
          image="https://www.floersheim-main.de/media/custom/2983_112_1_g.JPG?1516189242"
          alt="green iguana"
        />
      ),
  },
  {
    label: "Frage 2 | Dach",
    showIfNo: true,
    description: "Lorem Ipsum.",
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
  },
  {
    label: "Frage 3 | Litheinfall",
    showIfNo: true,
    description: `Lorem Ipsum`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
  },
];

const Mieter = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography sx={{mb: 1}} color="white" variant="h1">
          Fragen
        </Typography>
        <Questions steps={steps} />
      </Grid>
    </Grid>
  );
};

export default Mieter;
