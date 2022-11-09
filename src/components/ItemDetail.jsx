import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ItemCounter from "./itemCounter";

export default function ItemDetail({ producto }) {
  const AddCart = (cantidad) => {};
  return (
    <div>
      <div key={producto.id}>
        <Box p={10} pt={5} minHeight="50vh" display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia component="img" alt={producto.title} maxheight="100vh" image={producto.pictureURL} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Color: {producto.color}{" "}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Precio: {producto.price}{" "}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <ItemCounter initial={0} stock={10} AddCart={AddCart} />
              <Link>{/* <Button size="small">Agregar al Carrito</Button> */}</Link>
            </CardActions>
          </Card>
        </Box>
      </div>
      {/* {productos.map((item) => (
        <Item item={item} />
      ))} */}
    </div>

  );
}
