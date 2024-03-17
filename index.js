const express = require("express");
const app = express();

const urlRoute = require("./routes/url");
const {connectToMongoDB} = require('./connect')
const PORT = 8001;


app.use(express.json());
app.use("/url", urlRoute);



connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=>{
    console.log('DB connection is done');
})

app.listen(PORT, () => {
  console.log(`Server is up and running :${PORT}`);
});
