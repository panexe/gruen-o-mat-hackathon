import { CardMedia, formLabelClasses, Grid, Typography } from "@mui/material";
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
    returnYes: "Garagen bietet häufig eine gute Fläche zur Begrünung. Diese können dadurch vor Witterungseinflüssen geschützt werden, und Temperaturschwankungen abfedern. ",
    returnNo: "",
    imagePath:
      "https://www.fertiggaragen.net/media/pages/ausstattungen/dachbegruenung/16ddcf3349-1627299100/juwel-fertiggaragen-dachbegruenung.jpg",
  },
  {
    label: "Frage 3 | Terasse",
    showIfNo: false,
    description: `Hat Ihr Haus eine Terasse?`,
    returnYes:
      "Auch eine Terasse bietet viele Möglichkeiten Pflanzen unterzubringen.",
    returnNo: "",
    imagePath:
      "https://i.pinimg.com/originals/85/ef/df/85efdfd38322a03d73024b9052acef91.jpg",
  },
  {
    label: "Frage 4 | Begrünung",
    showIfNo: true,
    description: `Können Sie sich vorstellen Ihr Dach zu begrünen?`,
    returnYes: "Gärtnerische Gestaltung und Begrünung von Innenhöfen, Stellplätzen und Vorgärten Zuschuss 60% der als förderfähig anerkannten Kosten (unrentierliche Kosten), die nicht durch zu erwartende Einnahmen/Erträge gedeckt werden können.",
    returnNo: "Eine Begrünung bringt viele positive Aspekte mit sich.",
    imagePath:
      "https://www.ndr.de/ratgeber/garten/dachbegruenung106_v-contentgross.jpg",
  },
  {
    label: "Frage 5 | Photovoltaik",
    showIfNo: true,
    description: `Sind an ihrem Haus Photovoltaikanlagen verbaut?`,
    returnYes: "Auch mit Photovoltaik anlagen ist Dachbegrünung möglich. ",
    returnNo: "Sie haben mit nein geantwortet",
    imagePath:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1158&q=80",
  },
  {
    label: "Frage 6 | Projekte",
    showIfNo: false,
    description: `Können Sie sich vorstellen an öffentlichen Begrünungsprojekten teilzunehmen?`,
    returnYes: "Sie haben mit ja geantwortet",
    returnNo: "",
    imagePath:
      "https://images.unsplash.com/photo-1618698343216-671a5d82b85a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1072&q=80",
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
