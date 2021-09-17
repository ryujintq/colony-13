import { expect } from "chai"
import request from "supertest"
import app from "../app.js"
import { connectDB, closeDB } from "../utils/dbConnection.js"

describe("War route test", () => {
    before(async () => await connectDB())
    after(() => closeDB())

    describe("GET /api/v1/wars", () => {
        it("should return wars in array", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/wars")
                .set({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Mjk0NzYwNDd9.W2pRyuKqaRH4T30hGvVQiLZf_lyB3bMsiPHtHyNy4vE' })
            expect(statusCode).to.equal(200)
            expect(body.data.wars).to.ok
            expect(body.message).to.equal("wars fetched successfully")
        })
    })
})
