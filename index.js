const app = require("./app.js");

//Puerto del servidor
const PORT = process.env.PORT || 5050

/** Run Server */
app.listen(PORT, function () {
    console.log(`Demo project at: ${PORT}!`); 
});