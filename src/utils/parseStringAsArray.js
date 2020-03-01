module.exports = function parseStringAsArray(techs){
    
    return techs.split(',').map(tech => tech.trim())
}