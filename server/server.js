
import express from 'express'
import connect  from './config/db.js';
import cors from 'cors'
import productRoute from './routes/productRoute.js'


const app = express();
app.use(express.json());
app.use(cors());
app.use("/products", productRoute);
app.get("/", async  (req, res) => {
  res.send("haiii");
});

app.listen(8080, async () => {
    try {
      await connect();
      console.log(`http://localhost:8080`);
    } catch (error) {
      console.log(error);
    }
  });
  