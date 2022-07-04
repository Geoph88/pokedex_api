const express = require('express')
const router = express.Router()

const User = require('../models/user')

const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
  const {userEmail, userPassword} = req.body

  User
  .findByEmail(userEmail)
  .then(user => {
    if(user) {
      const isValidPassword = bcrypt.compareSync(userPassword, user.password_digest)
      if (user && isValidPassword) {
        req.session.userId = user.id
        console.log(user.id)
        res.json({ userName: user.name, userId: user.id})
      }
    } else {
      console.log('error')
      res.json(null)
    }
  })
})

module.exports = router