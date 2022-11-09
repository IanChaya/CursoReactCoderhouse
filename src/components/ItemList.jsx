import React from "react";
import Item from "./Item";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productosHC } from "../data/data";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";

export default function ItemList() {
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosPromise = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosHC);
      }, 2000);
    });

    productosPromise.then((res) => {
      if (idcategory) {
        setProductos(res.filter((item) => item.category === idcategory));
      } else {
        setProductos(res);
      }
    });
  }, [idcategory]);

  return (
    <div>
      {!productos.length && "Loading..."}
      <Stack justifyContent="space-around">
        <Box p={10} pt={10} minHeight="100vh">
          <Grid container spacing={15} justifyContent="space-around">
            {productos.map((item, i) => {
              return (
                <Grid key={i} item>
                  <Item item={item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>

      {/* {productos.map((item) => (
        <Item item={item} />
      ))} */}
    </div>
  );
}
