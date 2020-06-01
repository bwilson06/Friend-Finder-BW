var friendsArray = require("../data/friends");
module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
    });

    app.post("/api/friends", function(req, res){
        var newScores = req.body.scores
        var bffName = '';
        var bffPic = '';
        var totalDiff = 50;

        console.log(newScores)

        for (var i = 0; i < friendsArray.length; i ++){
            var difference = 0;

            for (var j = 0; j < newScores.length; j++){
                difference += (Math.abs(parseInt(friendsArray[i].scores[j])) - parseInt((newScores[j])));
            }

            if (difference < totalDiff){
                bffName = friendsArray[i].name;
                bffPic = friendsArray[i].photo;
                totalDiff = difference;
            }
        }
        friendsArray.push(req.body);
        res.json({status: 'OK', name: bffName, photo: bffPic})
        
    });
    
};