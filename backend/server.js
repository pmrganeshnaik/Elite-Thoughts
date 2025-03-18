import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";

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
    const result = await db.query(
      "SELECT * FROM public.blog ORDER BY id DESC "
    );
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

    if (!result.rows[0].id) {
      res
        .status(404)
        .json({ success: false, message: "By this id post is not exitist" });
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
      category: req.body.category,
      date: new Date(),
    };

    const result = await db.query(
      "INSERT INTO blog (title, content, author, category, date) VALUES($1, $2, $3, $4, $5)  RETURNING *",
      [
        newPost.title,
        newPost.content,
        newPost.author,
        newPost.category,
        newPost.date,
      ]
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
      category: req.body.category || exitistingPost.category,
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
