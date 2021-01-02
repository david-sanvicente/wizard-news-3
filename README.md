# wizard-news-3

**psql client**: (shell), human interface

**pg**: (driver), application interface

**pg** client uses SQL queries and returns a **Promise**

Use Express router to factor routes into separate modules
  app.use("/posts", require("./routes/posts"))
  
Traffic can also be redirected:
  app.get("/", (req, res)=>{
    res.redirect("/posts")
  })
  
The **order** of route declarations is important in order to prevent conflicts, such as **URI** conflicting with **params**

**Body-parsing** middleware allows Express to ingest HMTL to handle POST requests

One POST route can submit multiple queries

**Bugs:**
Experienced a bug where pg needed a specific version. Resolved by modifying package.json to depend version 8.2
