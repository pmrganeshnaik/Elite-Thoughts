import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import pg from "pg";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const masterKey = "ganesh";
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const db = new pg.Client({
  connectionString: process.env.DATABASE_URL, // Use DATABASE_URL from .env
  ssl: { rejectUnauthorized: false } // Required for Neon DB
});

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL!"))
  .catch((err) => console.error("❌ Database connection error:", err));

// GET All Posts
app.get("/posts", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM public.blog ORDER BY id DESC");
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a Specific Post by ID
app.get("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await db.query("SELECT * FROM blog WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(200).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// CREATE a New Post
app.post("/posts", async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const date = new Date();

    const result = await db.query(
      "INSERT INTO blog (title, content, author, category, date) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [title, content, author, category, date]
    );

    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE a Post (PATCH)
app.patch("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
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
    res.status(500).json({ message: error.message });
  }
});

// DELETE a Post
app.delete("/posts/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const userKey = req.query.key;

    if (userKey !== masterKey) {
      return res.status(403).json({ success: false, message: "Invalid master key" });
    }

    const result = await db.query("DELETE FROM blog WHERE id = $1 RETURNING *", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    res.status(204).send(); // Successfully deleted, no content returned
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve Frontend in Production
if (process.env.NODE_ENV === "Production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 API is running at http://localhost:${PORT}`);
});
