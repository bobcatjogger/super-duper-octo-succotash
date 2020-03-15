'use strict';


/**
 * add a sighting
 * Adds a Sasquatch sighting to the system
 *
 * body Sighting Sighting to add (optional)
 * no response value expected for this operation
 **/
exports.addSighting = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a sighting
 *
 * sightingId Long Sighting id to delete
 * no response value expected for this operation
 **/
exports.deleteSighting = function(sightingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Sightings by tags
 * Finds sightings based on if any or all of the tags match. Muliple tags can be provided with comma separated strings. 
 *
 * tags List Tags to filter by
 * searchType String Search for tags that match Any of the tags or All of the provided tags  (optional)
 * returns List
 **/
exports.findSightingsByTags = function(tags,searchType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
}, {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Calculate distance
 * Calculate the distance between two sightings
 *
 * sightingId Integer ID of the first sighting (order does not matter) 
 * sightingId2 Integer ID of the second sighting (order does not matter) 
 * returns String
 **/
exports.getDistance = function(sightingId,sightingId2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "42.7 km";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds the nearest sightings
 * List nearest sightings within a certain distance or  lists the nearest [count] sightings (paginated by 1000). 
 *
 * sightingId Integer ID of the sighting
 * proximity Integer How close must the other sighting be in km to be included. (optional)  (optional)
 * count Integer How many other sighting should be included. (optional)  (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.getNearest = function(sightingId,proximity,count,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
}, {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find sighting by ID
 * Returns a single sighting
 *
 * sightingId Long ID of sighting to return
 * returns Sighting
 **/
exports.getSightingById = function(sightingId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all sightings
 * List Sightings (paginated by 1000) 
 *
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.listSightings = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
}, {
  "reportedAt" : "2000-01-23T04:56:07.000+00:00",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "witnessDescription" : "Etiam vel augue.",
  "latitude" : "40.67262028",
  "id" : 1001,
  "longitude" : "40.67262028",
  "tags" : "black,bushes,sad,morning"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing sighting
 *
 * body Sighting Sighting object that needs to be added to the database

 * no response value expected for this operation
 **/
exports.updateSighting = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a sighting with form data
 *
 * witnessDescription String  (optional)
 * latitude String  (optional)
 * longitude String  (optional)
 * tags String  (optional)
 * sightingId Long ID of sighting that needs to be updated
 * no response value expected for this operation
 **/
exports.updateSightingWithForm = function(witnessDescription,latitude,longitude,tags,sightingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

