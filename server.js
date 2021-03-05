const app = require("./index");
const port = 3000;

app.listen(port || process.env.PORT, () =>
  console.log("Server running on port " + port)
);
