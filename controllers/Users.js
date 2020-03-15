'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.addSighting = function addSighting (req, res, next, body) {
  Users.addSighting(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSighting = function deleteSighting (req, res, next, sightingId) {
  Users.deleteSighting(sightingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findSightingsByTags = function findSightingsByTags (req, res, next, tags, searchType) {
  Users.findSightingsByTags(tags, searchType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDistance = function getDistance (req, res, next, sightingId, sightingId2) {
  Users.getDistance(sightingId, sightingId2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNearest = function getNearest (req, res, next, sightingId, proximity, count, skip, limit) {
  Users.getNearest(sightingId, proximity, count, skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSightingById = function getSightingById (req, res, next, sightingId) {
  Users.getSightingById(sightingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listSightings = function listSightings (req, res, next, skip, limit) {
  Users.listSightings(skip, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSighting = function updateSighting (req, res, next, body) {
  Users.updateSighting(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateSightingWithForm = function updateSightingWithForm (req, res, next, witnessDescription, latitude, longitude, tags, sightingId) {
  Users.updateSightingWithForm(witnessDescription, latitude, longitude, tags, sightingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
