import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
import path from "path";
import { log } from "console";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const masterKey = "ganesh";
const __dirname = path.resolve();


app.use(cors({ origin: "*", methods: ["GET", "POST", "PATCH", "DELETE"] }));


app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } 
});

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.get("/posts", async (req, res) => {
  try {
    console.log("Fetching all posts...");
    const result = await db.query("SELECT * FROM blog ORDER BY id DESC");
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(`Fetching post with ID: ${id}`);
    const result = await db.query("SELECT * FROM blog WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const date = new Date();

    console.log("Creating new post...");
    const result = await db.query(
      "INSERT INTO blog (title, content, author, category, date) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, content, author, category, date]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.patch("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log(`Updating post with ID: ${id}`);

    // Check if post exists
    const existingPost = await db.query("SELECT * FROM blog WHERE id = $1", [id]);
    if (existingPost.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    const { title, content, author, category } = req.body;
    const date = new Date();

    const updatedPost = {
      title: title || existingPost.rows[0].title,
      content: content || existingPost.rows[0].content,
      author: author || existingPost.rows[0].author,
      category: category || existingPost.rows[0].category,
      date
    };

    const result = await db.query(
      "UPDATE blog SET title = $1, content = $2, author = $3, category = $4, date = $5 WHERE id = $6 RETURNING *",
      [updatedPost.title, updatedPost.content, updatedPost.author, updatedPost.category, updatedPost.date, id]
    );

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userKey = req.query.key;

    if (userKey !== masterKey) {
      return res.status(403).json({ success: false, message: "Invalid master key" });
    }

    console.log(`Deleting post with ID: ${id}`);
    const result = await db.query("DELETE FROM blog WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(204).send(); 
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});


if (process.env.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 API is running at http://localhost:${PORT}`);
  console.log("Testing");
  
});
