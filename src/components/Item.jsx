import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import LinearProgress from "@mui/material/LinearProgress";

export default function Item({ product }) {
  return (
    <div>
      {product.id ? (
        <div key={product.id}>
          <Card sx={{ width: 375, height: 525, margin: 3, justifyContent: "space-around" }}>
            <Link to={"/item/" + product.id}>
              <CardMedia
                style={{ aspectRatio: "stretch", scale: "0.75", height: 455, width: 385 }}
                component="img"
                alt={product.name}
                maxheight="100vh"
                image={product.pictureURL}
              />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}
