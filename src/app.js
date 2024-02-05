// REQUIRED LIB
const path = require("path")
const express = require("express")
const hbs = require("hbs")
const app = express()
//Defien paths for Express Config
const publicDir = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")
//setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewPath)
hbs.registerPartials(partialsPath)
// Setup static Directory to serve
app.use(express.static(publicDir))
//ROUTES
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Ziad Mahmoud ",
  })
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Ziad Mahmoud",
  })
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    message: "This is a help message",
    name: "Ziad Mahmoud",
  })
})
app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: " You must Provide an address!",
    })
  }
  res.send({
    forecast: "It is snowing",
    location: "Philadelphe",
    address: req.query.address,
  })
})
app.get("/help/*", (req, res) => {
  res.render("404page", {
    errorMessage: "This Help Article not Found",
  })
})
app.get("*", (req, res) => {
  res.render("404page", {
    errorMessage: " Page Not Found",
  })
})
//Listening PORT
app.listen(3000, () => {
  console.log("The PORT is 3000 ")
})
