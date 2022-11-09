// import React from "react";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Item({ item }) {
  return (
    <div key={item.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" alt={item.title} maxheight="100vh" image={item.pictureURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions>
          <Link to={"/item/" + item.id}>
            <Button size="small">Ir al Item</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}