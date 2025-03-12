import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";

// In-memory data store
// let posts = [
//   {
//     id: 1,
//     title: "The Rise of Decentralized Finance",
//     content:
//       "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
//     author: "Alex Thompson",
//     date: "2023-08-01T10:00:00Z",
//   },
//   {
//     id: 2,
//     title: "The Impact of Artificial Intelligence on Modern Businesses",
//     content:
//       "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
//     author: "Mia Williams",
//     date: "2023-08-05T14:30:00Z",
//   },
//   {
//     id: 3,
//     title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
//     content:
//       "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
//     author: "Samuel Green",
//     date: "2023-08-10T09:15:00Z",
//   },
// ];

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const masterKey = "ganesh";

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

//Database
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect();

// GET All posts
app.get("/posts", async (req, res) => {
  try {
    const result = await db.query("select * from blog");
    res.status(200).json({ success: true, Data: result.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", async (req, res) => {
  try {
    const result = await db.query("select * from blog where id = $1", [
      parseInt(req.params.id),
    ]);

    if(!result.rows[0].id){
        res.status(404).json({ success: false, message : "By this id post is not exitist"});
    }
    res.status(200).json({ success: true, Data: result.rows });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

//CHALLENGE 3: POST a new post
app.post("/posts", async (req, res) => {
  try {

    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      category : req.body.category,
      date: new Date(),
    };

    const result = await db.query(
      "INSERT INTO blog (title, content, author, category, date) VALUES($1, $2, $3, $4, $5)  RETURNING *",
      [newPost.title, newPost.content, newPost.author,newPost.category ,newPost.date]
    );

    res.status(200).json({ success: true, Data: result.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const exitistingPost = await (
      await db.query("select * from blog where id = $1", [id])
    ).rows[0];
    const updatePost = {
      title: req.body.title || exitistingPost.title,
      content: req.body.content || exitistingPost.content,
      author: req.body.author || exitistingPost.author,
      category : req.body.category || exitistingPost.category,
      date: new Date(),
    };
    const result = await db.query(
      "UPDATE blog SET title = $1, content = $2, author = $3, category = $4, date = $5 WHERE id = $6 RETURNING *",
      [
        updatePost.title,
        updatePost.content,
        updatePost.author,
        updatePost.category,
        updatePost.date,
        id,
      ]
    );
    res.status(200).json({ success: true, Data: result.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userKey = req.query.key;
    if (userKey === masterKey) {
      const serachIndex = (
        await db.query("select * from blog where id = $1", [id])
      ).rows[0].id;
      if (serachIndex >= 0) {
        const result = await db.query(
          "DELETE FROM blog WHERE id = $1 RETURNING *",
          [id]
        );
        console.log(result);
        res.sendStatus(204);
      } else {
        res.status(404).json({ data: "No data found on id  " + id });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});
