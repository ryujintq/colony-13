import { expect } from "chai"
import request from "supertest"
import app from "../app.js"
import { connectDB, closeDB } from "../utils/dbConnection.js"
import User from "../models/userModel.js"
import { encryptPassword } from "../utils/bcryptFncs.js"

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

    describe("/api/v1/user/:username", () => {
        it("should return error if user does not exist", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/user/ryujin1")
                .set({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk0NzYwNDd9.W2pRyuKqaRH4T30hGvVQiLZf_lyB3bMsiPHtHyNy4vE' })
            expect(statusCode).to.equal(404)
            expect(body.error).to.ok
            expect(body.error).to.be.a("string")
            expect(body.error).to.equal("User not found")
        })

        it("should return user if it exists", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/user/ryujin")
                .set({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk0NzYwNDd9.W2pRyuKqaRH4T30hGvVQiLZf_lyB3bMsiPHtHyNy4vE' })
            expect(statusCode).to.equal(200)
            expect(body.data.user).to.ok
            expect(body.status).to.be.equal("success")
            expect(body.message).to.equal("User found")
        })
    })
})
