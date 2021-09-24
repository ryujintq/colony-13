import { expect } from "chai"
import request from "supertest"
import app from "../app.js"
import { connectDB, closeDB } from "../utils/dbConnection.js"
import User from "../models/userModel.js"
import { encryptPassword } from "../utils/bcryptFncs.js"
import { token } from '../utils/testUtils.js'

describe("User route test", () => {
    before(async () => {
        await connectDB()
        await User.deleteMany()
        await User.create({
            username: "ryujin",
            password: await encryptPassword("123456"),
        })
    })
    after(() => closeDB())

    describe("GET /api/v1/users", () => {
        it("should return array of all users", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/users")
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(200)
            expect(body.data).to.ok
            expect(body.data.users).to.be.an('array')
            expect(body.message).to.equal("Users found")
        })
    })

    describe("GET /api/v1/users/:username", () => {
        it("should return error if user does not exist", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/users/ryujin1")
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(404)
            expect(body.error).to.ok
            expect(body.error).to.be.a("string")
            expect(body.error).to.equal("User not found")
        })

        it("should return user if it exists", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/users/ryujin")
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(200)
            expect(body.data.user).to.ok
            expect(body.status).to.be.equal("success")
            expect(body.message).to.equal("User found")
        })
    })

    describe("POST /api/v1/users/:username", () => {
        it("should return error if user does not exist", async () => {
            const { statusCode, body } = await request(app)
                .post("/api/v1/users/ryujin1")
                .send({ role: 'Healer', level: '20', weaponPrimary: 'Spear', weaponSecondary: 'Bow' })
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(404)
            expect(body.error).to.ok
            expect(body.error).to.be.a("string")
            expect(body.error).to.equal("User not found")
        })

        it("should return user if it exists", async () => {
            const { statusCode, body } = await request(app)
                .post("/api/v1/users/ryujin")
                .send({ role: 'Healer', level: '20', weaponPrimary: 'Spear', weaponSecondary: 'Bow' })
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(200)
            expect(body.data.user).to.ok
            expect(body.status).to.be.equal("success")
            expect(body.message).to.equal("User found")
        })
    })
})
