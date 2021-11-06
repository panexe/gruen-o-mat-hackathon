import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import BusinessIcon from "@mui/icons-material/Business";

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.15s ease-in-out",
  "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
}));

interface LadingPageProps {
  choice: string;
  setChoice: React.Dispatch<React.SetStateAction<string>>,
}

const LandingPage = ({choice, setChoice} : LadingPageProps) => {

  const handleCardClick = (choice : string) => {
    setChoice(choice);
  }

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ width: "100vw", height: "100vh" }}
    >
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <Typography color="white" variant="h1">
          Wählen Sie:
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid sx={{ width: "80%" }} item xs={8}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <StyledCard onClick={(event) => handleCardClick('mieter')} sx={{ padding: "4px", minWidth:'300px' }}>
              <CardActionArea>
                <CardMedia
                style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'}}
                  component="img"
                  image="https://cdn-icons-png.flaticon.com/256/2590/2590500.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Mieter
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
          <Grid item>
            <StyledCard onClick={(event) => handleCardClick('eigentuemer')} sx={{minWidth:'300px', padding: "4px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'}}
                  image="https://cdn-icons-png.flaticon.com/256/2590/2590491.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                   Eigentümer
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
          <Grid item>
            <StyledCard onClick={(event) => handleCardClick('organisation')} sx={{minWidth:'300px' ,padding: "4px" }}>
              <CardActionArea>
                <CardMedia
                style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'}}
                  component="img"
                  image="https://cdn-icons-png.flaticon.com/256/2590/2590477.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    Organisation
                  </Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
