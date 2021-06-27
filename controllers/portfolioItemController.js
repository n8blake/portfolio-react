//const { request } = require("express");
const { PortfolioItem } = require("../models");
//const PortfolioItem = db.PortfolioItem;

module.exports = {
    findAll: function (request, response) {
        PortfolioItem
            .find({})
            .then(dbModel => {
                response.json(dbModel)
            })
            .catch(error => response.status(422).json(error));
    },
    findById: function (request, response) {
        PortfolioItem
            .findById(request.params.id)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    },
    create: function (request, response) {
        PortfolioItem
            .create(request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    },
    update: function (request, response) {
        PortfolioItem
            .findOneAndUpdate({ _id: request.params.id }, request.body)
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    },
    remove: function (request, response) {
        PortfolioItem
            .findById({ _id: request.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => response.json(dbModel))
            .catch(error => response.status(422).json(error));
    }
};