const { request } = require('graphql-request');

const schemaGraphql = require('../schema/schema.graphql.js')
const baseURL = require('../../environment.json').LilyMortyURL;
function index(req, res) {
        res.json({data : "test_service"})
}
function get(req, res) {
        console.log(baseURL)
    request(`${baseURL}/graphql/`, schemaGraphql.characters)
        .then(data => res.json(data))
        .catch(data => res.json({err : data}))
}

module.exports = {index, get}
