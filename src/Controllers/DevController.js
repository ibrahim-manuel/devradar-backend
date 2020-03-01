const axios = require('axios')

const Dev = require('../Models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
module.exports = {
    

    async index(request, response){
        const devs = await Dev.find()
        return response.json(devs)
    },


    async store(request, response){
        const { github_username, techs, longitude, latitude } = request.body

        const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

        const { name = login, avatar_url, bio } = apiResponse.data

        const techsArray = parseStringAsArray(techs)

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude]
        }

        const dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            location,
            techs: techsArray
        })

        return response.json(dev)

    }

    // criar o update e delete como trabalho independente
}