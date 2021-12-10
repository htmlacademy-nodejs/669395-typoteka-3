'use strict';

const express = require(`express`);
const mainRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/my-routes`);
const loginRoutes = require(`./routes/login-routes`);
const articlesRoutes = require(`./routes/articles-routes`);
const registerRoutes = require(`./routes/register-routes`);
const searchRoutes = require(`./routes/search-routes`);
const categoriesRoutes = require(`./routes/categories-routes`);

const DEFAULT_PORT = 8080;

const app = express();

app.use(`/`, mainRoutes);
app.use(`/my`, myRoutes);
app.use(`/login`, loginRoutes);
app.use(`/articles`, articlesRoutes);
app.use(`/register`, registerRoutes);
app.use(`/search`, searchRoutes);
app.use(`/categories`, categoriesRoutes);


app.listen(DEFAULT_PORT);
