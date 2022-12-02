import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import ItemCounter from "./itemCounter";
import LinearProgress from "@mui/material/LinearProgress";

export default function ItemDetail({ product }) {
  return (
    <div>
      {product.id ? (
        <div key={product.id}>
          <Box p={10} pt={5} width="375" height="525" margin="1">
            <Card sx={{ display: "flex", flexDirection: "row", aspectRatio: "stretch", height: "500" }}>
              <div>
                <CardMedia component="img" alt={product.name} image={product.pictureURL} />
              </div>
              <CardContent>
                <Typography variant="h4" component="div">
                  {product.name}
                </Typography>
                <Typography align="justify" variant="paragraph" color="text.secondary">
                  {product.description}{" "}
                </Typography>
                <br />
                <br />
                <Typography variant="body2" color="text.secondary">
                  Color: {product.color}{" "}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stock Disponible: {product.stock} unidades
                </Typography>
                <br />
                <Typography variant="h6" color="text.secondary">
                  Precio: {product.price} $USD
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <ItemCounter product={product} />
              </CardActions>
            </Card>
          </Box>
        </div>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}
