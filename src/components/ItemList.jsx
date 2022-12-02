import React from "react";
import Item from "./Item";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

export default function ItemList({ products }) {
  return (
    <div>
      {products.length ? (
        <Stack justifyContent="space-between">
          <Box p={10} pt={10} minHeight="100vh">
            <Grid container spacing={5} justifyContent="space-between">
              {products.map((product) => {
                return (
                  <Grid product>
                    <Item key={product.id} product={product} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Stack>
      ) : (
        <LinearProgress />
      )}
    </div>
  );
}
