const Dev = require('../Models/Dev')
const parseArrayAsString = require('../utils/parseStringAsArray')

module.exports = {
    
    async index(request, response){
        // retorna devs num raio de 10 km 
        // filtrado por tecnologia

        const { latitude, longitude, techs } = request.query
        const techsArray = parseArrayAsString(techs)

        const devs = await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                },
            },

        })

        return response.json(devs)
    }
}