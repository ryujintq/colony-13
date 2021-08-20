import { expect } from "chai"
import request from 'supertest'
import app from '../app.js'
import { connectDB, closeDB } from '../utils/dbConnection.js'
import User from '../models/userModel.js'
import { encryptPassword } from "../utils/bcryptFncs.js"

describe("Auth route test", () => {
  before(async () => {
    await connectDB()
    await User.deleteMany()
    await User.create({
      username: 'ryujin',
      password: await encryptPassword('123456')
    })
  })

  after(() => closeDB())

  describe('/api/v1/signup', () => {
    it("should not accept empty fields", async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/signup').send({ username: '', password: '' })
      expect(statusCode).to.equal(400)
      expect(body.error).to.ok
      expect(body.error).to.be.a('string')
      expect(body.error).to.be.oneOf(['Please enter a valid username', 'Please enter a valid password'])

    })

    it("should return error if user already exists", async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/signup').send({ username: 'ryujin', password: '123456' })
      expect(statusCode).to.equal(400)
      expect(body.error).to.ok
      expect(body.error).to.be.a('string')
      expect(body.error).to.equal('User already exists')

    })

    it("should not accept passwords under 6 characters long", async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/signup').send({ username: 'ryujin1', password: '12345' })
      expect(statusCode).to.equal(400)
      expect(body.error).to.ok
      expect(body.error).to.be.a('string')
      expect(body.error).to.equal('Please enter a valid password')

    })

    it("should create new user if all tests have passed", async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/signup').send({ username: 'ryujin1', password: '123456' })
      expect(statusCode).to.equal(200)
      expect(body.status).to.ok
      expect(body.status).to.be.a('string')
      expect(body.status).to.equal('success')
      expect(body.message).to.equal('signup was successful')
    })
  })

  describe('/api/v1/login', () => {
    it('should return error if user not found', async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/login').send({ username: '', password: '' })
      expect(statusCode).to.equal(400)
      expect(body.error).to.ok
      expect(body.error).to.be.a('string')
      expect(body.error).to.equal('Invalid credentials')

    })

    it('should login successfully', async () => {
      const { statusCode, body } = await request(app).post('/api/v1/auth/login').send({ username: 'ryujin', password: '123456' })
      expect(statusCode).to.equal(200)
      expect(body.status).to.ok
      expect(body.status).to.be.a('string')
      expect(body.status).to.equal('success')
      expect(body.message).to.equal('login was successful')
    })
  })
})
