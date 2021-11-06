import {
  Grid,
  Paper,
  Typography,
  Divider,
  CardMedia,
  Box,
  Card,
} from "@mui/material";
import { ReactNode } from "react";

interface ResultProps {
  children?: ReactNode;
  text: string;
  imagePath?: string;
  title: string;
}

const Result = ({ children, text, imagePath, title }: ResultProps) => {
  return (
    <>
      <Card square sx={{ maxWidth: '100%', backgroundColor:'#A7D930CA' , my:1.5}}>
        <CardMedia
          component="img"
          height="140"
          src={imagePath}
          alt="garden image"
        />
        <Typography color='text.primary' align='left'  sx={{px:2, my:1, pb:0}} gutterBottom variant="h5" component="div">
        {title.split(' ')[3]}
        </Typography>
        <Typography color='text.secondary' align='left' sx={{px:2, py:1}} >
        {text}
        </Typography>
      </Card>
    </>
  );
};

export default Result;
