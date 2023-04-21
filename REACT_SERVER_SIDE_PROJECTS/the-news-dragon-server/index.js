const express = require("express");
const app = express();
const cors = require("cors");
const categories = require("./data/categories.json");
const news = require("./data/news.json");

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});

// Id wise specific news
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const particularNews = news.find((pNews) => pNews._id === id);
  res.send(particularNews);
});

// category wise news
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else if (id === 8) {
    res.send(news);
  } else {
    const categoryWiseNews = news.filter(
      (cWiseNews) => parseInt(cWiseNews.category_id) === id
    );
    res.send(categoryWiseNews);
  }
});

app.listen(port, () => {
  console.log(`The Dragon news API is running  on port: ${port}`);
});
