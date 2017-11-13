var mongoose = require('mongoose');
var ClimbData = mongoose.model('climbdata');
var TakeoffData = mongoose.model('takeoffdata');
var LandingData = mongoose.model('landingdata');


//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

//// CLIMB DATA ////////////////////////////////////////////////////////////////
/* GET all ClimbData records */
module.exports.climbDataReadAll = function(req, res) {
    console.log("Finding all Climb Data Records", req);

    ClimbData
        .find({})
        .exec(function(err, climbdata) {
            if (err) {
                console.log(err);
                sendJSONresponse(res, 404, err);
            }
            console.log(climbdata);
            sendJSONresponse(res, 200, climbdata);
        });
}

/* GET ClimbData by weight */
module.exports.climbDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        ClimbData
            .find({
                weight: req.params.weight
            })
            .exec(function(err, climbdata) {
                if (!climbdata) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(climbdata);
                sendJSONresponse(res, 200, climbdata);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};

//// LANDING DATA //////////////////////////////////////////////////////////////
/* GET LandingData by weight */
module.exports.landingDataReadOne = function(req, res) {
    console.log('Finding Climb Data Record', req.params);
    if (req.params && req.params.weight) {
        LandingData
            .find({
                weight: req.params.weight,
            })
            .exec(function(err, landingdata) {
                if (!landingdata) {
                    sendJSONresponse(res, 404, {
                        "message": "weight value not found"
                    });
                    return;
                }
                else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(landingdata);
                sendJSONresponse(res, 200, landingdata);
            });
    }
    else {
        console.log('No weight value specified');
        sendJSONresponse(res, 404, {
            "message": "No weight value in request"
        });
    }
};