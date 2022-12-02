import React, { useState } from "react";
import { cartContext } from "./CartContextComponent";
import { useContext } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function Checkout() {
  const { totalToPay, cart, deleteAllFromCart } = useContext(cartContext);
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");

  const wrongEmail = () => {
    toast.error("Email Incorrecto", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const wrongTel = () => {
    toast.error("Telefono Incorrecto", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const wrongName = () => {
    toast.error("Nombre Incorrecto", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const missingInfo = () => {
    toast.error("Faltan datos en el formulario", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  function validateForm() {
    const order = {
      buyer: { name, tel, email },
      totalToPay,
      cart,
    };

    function validateEmail(email) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(email) == false) {
        wrongEmail();
        return false;
      }

      return true;
    }

    function validateName(name) {
      var reg = /^[a-zA-Z ]+$/;

      if (reg.test(name) == false) {
        wrongName();
        return false;
      }

      return true;
    }

    function validatePhoneNumber(tel) {
      var phoneno = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
      if (phoneno.test(tel) == false) {
        wrongTel();
        return false;
      } else {
        return true;
      }
    }

    const db = getFirestore();
    const orders = collection(db, "orders");

    if (!name || !tel || !email) {
      missingInfo();
      return;
    }

    if (validateEmail(email) == false) {
      return;
    }

    if (validateName(name) == false) {
      return;
    }

    if (validatePhoneNumber(tel) == false) {
      return;
    }

    addDoc(orders, order).then(({ id }) => {
      setOrderId(id);
    });
    deleteAllFromCart();
  }
  return (
    <>
      {orderId ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "55vh",
          }}
        >
          <h1>Gracias por confiar en nosotros!</h1>

          <h2>
            El detalle de tu compra llegará a tu e-mail en breve. Haz el seguimiento de tu envio con el siguiente ID:
          </h2>

          <span>{orderId}</span>
          <br />

          <Link to="/">
            <Button variant="contained">Volver a la tienda</Button>
          </Link>
        </div>
      ) : (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={8} xl={8}>
                <h1 style={{ display: "flex", justifyContent: "center" }}>
                  {" "}
                  Para terminar su Compra, Ingrese los siguientes datos:
                </h1>
                <form id="form" class="topBefore">
                  <input id="name" type="text" placeholder="NOMBRE" onChange={(e) => setName(e.target.value)} />
                  <br />
                  <input id="tel" type="tel" placeholder="EMAIL" onChange={(e) => setEmail(e.target.value)} />
                  <br />
                  <input id="email" type="email" placeholder="TELEFONO" onChange={(e) => setTel(e.target.value)} />
                  <br />
                  <br />
                  <Button onClick={validateForm} variant="contained" endIcon={<SendIcon />}>
                    Enviar Pedido
                  </Button>
                </form>
              </Grid>
              <Grid item xs={12} sm={12} md={4} xl={4}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "5%",
                    marginRight: "3rem",
                    background: "#f3f2f2",
                  }}
                >
                  <CardContent>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h3>Detalle de su compra:</h3>
                      {cart.map((item) => (
                        <div key={item.id}>
                          <div>
                            <span>{item.cont + "  " + item.name} </span>
                          </div>
                        </div>
                      ))}
                      <div>
                        <br />
                        <span>{"Total a pagar: " + totalToPay + " US$"} </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      )}
      <ToastContainer />
    </>
  );
}
