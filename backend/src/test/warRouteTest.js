import { expect } from "chai"
import request from "supertest"
import app from "../app.js"
import { connectDB, closeDB } from "../utils/dbConnection.js"
import War from '../models/warModel.js'
import { token } from '../utils/testUtils.js'

describe("War route test", () => {
    before(async () => {
        await connectDB()
        await War.deleteMany()
        await War.create({
            settlement: 'First Light',
            position: 'Attacking',
            date: new Date('2021-09-30T08:30:00.000Z')
        })
    })
    after(() => closeDB())

    describe("GET /api/v1/wars", () => {
        it("should return wars in array", async () => {
            const { statusCode, body } = await request(app)
                .get("/api/v1/wars")
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(200)
            expect(body.data.wars).to.ok
            expect(body.data.wars.upcomingWars).to.be.an('array')
            expect(body.data.wars.pastWars).to.be.an('array')
            expect(body.message).to.equal("wars fetched successfully")
        })
    })

    describe("GET /api/v1/wars/:id", () => {
        it("should return specific war from id", async () => {
            const war = await War.find({}).lean()

            const { statusCode, body } = await request(app)
                .get(`/api/v1/wars/${war[0]._id}`)
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(200)
            expect(body.data.war).to.ok
            expect(body.message).to.equal("War found")
        })

        it("should return error if no war found", async () => {
            const { statusCode, body } = await request(app)
                .get(`/api/v1/wars/6149f608fe4862686cabd8db`)
                .set({ 'Authorization': token })
            expect(statusCode).to.equal(404)
            expect(body.error).to.equal("War not found")
        })
    })

    describe("POST /api/v1/wars", () => {
        it("should return war that is created", async () => {
            const { statusCode, body } = await request(app)
                .post(`/api/v1/wars`)
                .set({ 'Authorization': token })
                .send({ settlement: 'Brightwood', position: 'Attacking', date: new Date() })
            expect(statusCode).to.equal(200)
            expect(body.message).to.equal("New war created")
        })
    })
})
