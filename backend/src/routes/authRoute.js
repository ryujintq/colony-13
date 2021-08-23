import express from "express"
import asyncHandler from "../middleware/asyncMiddleware.js"
import User from "../models/userModel.js"
import genToken from "../utils/genToken.js"
import checkUsernameValidity from '../utils/checkUsernameValidity.js'
import { invalidCredentials, passwordInvalid, usernameInvalid } from '../utils/errors.js'
import { doPasswordsMatch, encryptPassword } from "../utils/bcryptFncs.js"

const router = express.Router()

router.post("/signup", asyncHandler(async (req, res, next) => {
  const { username, password } = req.body

  //check if username fits criteria
  if (!checkUsernameValidity(username)) {
    return next(usernameInvalid())
  }

  //passwords must be more than six characters
  if (password.length < 6) {
    return next(passwordInvalid())
  }

  //create new user
  let user = new User({
    username,
    password: await encryptPassword(password)
  })

  //save user
  await user.save()

  //set password to '', for sending user obj
  user.password = ""

  return res.status(200).json({ status: "success", message: "signup was successful", data: { user, token: genToken() } })
}))

router.post('/login', asyncHandler(async (req, res, next) => {
  const { username, password } = req.body

  console.log(password)

  //find user
  const user = await User.findOne({ username }).lean()

  //if user exists and passwords match
  if (user && await doPasswordsMatch(password, user.password)) {
    user.password = ''
    return res.status(200).json({ status: 'success', message: 'login was successful', data: { user, token: genToken() } })
  }

  //either user does not exist or passwords dont match
  return next(invalidCredentials())
}))

export default router
