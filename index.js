const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/routes");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
    res.send("Welcome to the Node.js School API!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
