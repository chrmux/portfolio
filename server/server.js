const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/.env` });

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3001;

mongoose
  .connect(`mongodb+srv://chrmux:Jnm01205018019@cluster0.2tnu7rp.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((cons) => {
    console.log("Connected to mongoDB 🔌");
    app.listen(port, () => console.log(`Listening to port ${port}`));
  })
  .catch((err) => console.log(err));