const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

router.post('/', (req, res) => {
  const {name, email, password} = req.body
  
  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
  .create(name, email, passwordDigest)
  .then(userName => res.json(userName))
})

module.exports = router