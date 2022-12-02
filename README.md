# iStore -  Tienda de productos marca Apple

Proyecto Final React JS - CoderHouse - iStore, Tienda de productos electronicos marca Apple, creada por Ian Chaya.

Aplicación Web Ecommerce desarrollada con React JS, Material UI, Toastify y Firebase.

DEPLOY: https://proyecto-final-react-ianchaya.web.app/

# Descripcion de la app

En esta app se desarrolla un e-commerce. El usuario puede navegar por la pagina de Inicio (ruta principal), en donde se muestran todos los productos disponibles así como tambien, desde las categorias, donde se filtraran los productos dependiendo el producto que se este buscando (Apple Watch, iPad o iPhone).

Al hacer click sobre un producto se muestra en detalle mas informacion del mismo y el usuario puede agregar al carrito la cantidad que quiera mientras no se supere el stock disponible. Una vez agregado el producto, se puede seguir navegando la web para agregar mas productos, o bien finalizar la compra para ver que hay dentro del carrito (Al almacenar el carrito en LocalStorage, si se actualiza la pagina no se pierden los productos ya seleccionados). 

Si se finaliza la compra, se accede al carrito, el cual muestra un resumen de los productos seleccionados, las cantidades y el total de la compra. En este punto uno tiene la opcion de eliminar por producto en el caso de arrepentirse o bien continuar con la compra. 
Si decide continuar con la misma, se accede a la pagina de checkout en donde se muestra un formulario en el cual el usuario debe ingresar nombre, email y telefono y un breve resumen de la compra con el total.

 Una vez completado y validado el formulario y, por lo tanto, confirmada la compra, se  le muestra al usuario el numero de orden de compra(generado con Firestore) y se puede volver al inicio nuevamante. Tanto los productos como las ordenes quedan almacenadas en la base de datos de Firestore.


# Librerias utilizadas

Material UI para el uso general, cards, spinners, buttons, iconos.
Importacion de css de bootstrap en App.js para estilos. 
Toastify para las alertas.
