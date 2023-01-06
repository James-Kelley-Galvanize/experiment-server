const port = 8080;

const app = require("./app");

app.listen(port, () => {
  console.log(`Experimental server listen on ${port}`);
});
