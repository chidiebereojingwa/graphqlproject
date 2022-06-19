const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();


mongoose.connect(
  "mongodb+srv://somto:Orji5644@cluster0.6y5afyt.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.connection.once('open', ()=>{
  console.log('connected to database')
})
// bind express with graphql
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql:true
  })
);

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});
