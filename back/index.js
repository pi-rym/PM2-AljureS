const app = require("./src/server.js")

app.listen(3000, ()=>{
    console.log("Server for Porject M2 working fine in port 3000");
})

/*
Implementar los elementos necesarios de manera tal que nuestra aplicación:

    Espere una petición de tipo GET a /movies.

    Al recibir la petición, debe ejecutarse el controlador correspondiente.

    El controlador responda al cliente que realizó la petición con un mensaje que indique que próximamente estarán disponibles los datos de películas.

*/