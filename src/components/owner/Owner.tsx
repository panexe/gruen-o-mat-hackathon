import { CardMedia, Grid, Typography } from "@mui/material";
import Questions from "../ui /questions/Questions";

const steps = [
  {
    label: "Frage 1 | Garten",
    showIfNo: true,
    description: `Hat Ihr Haus einen Garten?`,
    returnYes:
      "Da ihr Haus einen Garten hat haben Sie die Möglichkeit Kletterpflanzen an ihrer Fassade wachsen zu lassen. Diese bindet erhebliche Mengen an Staub und Schadstoffen. ",
    returnNo:
      "Auch wenn ihr Haus keinen Garten hat, können Sie trotzdem an der Stadtbegrünung teilnehmen, z.B. über Stadtgartenprojekte.",
    imagePath:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Blume_mit_Schmetterling_und_Biene_1uf.JPG",
  },
  {
    label: "Frage 2 | Garage",
    showIfNo: false,
    description: "Hat Ihr Haus eine Garage?",
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
    imagePath:
      "https://www.fertiggaragen.net/media/pages/ausstattungen/dachbegruenung/16ddcf3349-1627299100/juwel-fertiggaragen-dachbegruenung.jpg",
  },
  {
    label: "Frage 3 | Terasse",
    showIfNo: true,
    description: `Hat Ihr Haus eine Terasse?`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
    imagePath:
      "https://i.pinimg.com/originals/85/ef/df/85efdfd38322a03d73024b9052acef91.jpg",
  },
  {
    label: "Frage 4 | Begrünung",
    showIfNo: true,
    description: `Können Sie sich vorstellen Ihr Dach zu begrünen?`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
  },
  {
    label: "Frage 5 | Photovoltaik",
    showIfNo: true,
    description: `Sind an ihrem Haus Photovoltaikanlagen verbaut?`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
  },
  {
    label: "Frage 6 | Projekte",
    showIfNo: true,
    description: `Können Sie sich vorstellen an öffentlichen Begrünungsprojekten teilzunehmen?`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "Sie haben mit nein geantwortet",
  },
];

const Owner = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography sx={{ mb: 1 }} color="white" variant="h1">
          Fragen
        </Typography>
        <Questions steps={steps} />
      </Grid>
    </Grid>
  );
};

export default Owner;
