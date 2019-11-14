const express = require("express");

// database access using knex
const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db('posts').select('*')
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
       res.status(500).json({message: 'problem with the database.'})
    });
});

router.get("/:id", (req, res) => {
   const {id} = req.params;
   db('posts').select('*').where({id})
   .then(post => {
      res.status(200).json(post);
   })
   .catch(err => {
      res.status(500).json({ message: "problem with database"})
   })
});

router.post("/", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

module.exports = router;
