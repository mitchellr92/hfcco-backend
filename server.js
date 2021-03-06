const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get("/", (req, res) => res.json({ msg: "HFCCO API..." }));

// Define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/add-recipe", require("./routes/addRecipe"));
app.use("/api/recipes", require("./routes/recipes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
