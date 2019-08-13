var path = require('path');
var friends = require('../data/friends.js');

module.exports = function(app) {
    console.log('__ENTER apiRoutes.js__');

    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res) {
        var userInput = req.body;
        console.log('userInput = ' + JSON.stringify(userInput));

        var userResponses = userInput.scores;
        console.log('userResponses = ' + userResponses);
        
        // matching
        var matchName = '';
        var matchImage = '';
        var totalDifference = 10000; // initial value for comparison
        // loop over existing data
        for (var i = 0; i < friends.length; i++) {

        };
        
    });

};