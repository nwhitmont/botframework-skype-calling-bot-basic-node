/*
    Skype calling bot - basic example
*/

var restify = require('restify');
var calling = require('botbuilder-calling');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create calling bot
var connector = new calling.CallConnector({callbackUrl: process.env.SKYPE_CALLING_ENDPOINT, appId: process.env.MICROSOFT_APP_ID, appPassword: process.env.MICROSOFT_APP_PASSWORD});
var bot = new calling.UniversalCallBot(connector);
server.post('/api/calls', connector.listen());

// Add root dialog
bot.dialog('/', function (session) {
    var voiceMessage = "We meet at a college noted for knowledge, in a city noted for progress, in a sta" +
            "te noted for strength, and we stand in need of all three, for we meet in an hour" +
            " of change and challenge, in a decade of hope and fear, in an age of both knowle" +
            "dge and ignorance. The greater our knowledge increases, the greater our ignoranc" +
            "e unfolds. Despite the striking fact that most of the scientists that the world " +
            "has ever known are alive and working today, despite the fact that this Nation's " +
            "own scientific manpower is doubling every 12 years in a rate of growth more than" +
            " three times that of our population as a whole, despite that, the vast stretches" +
            " of the unknown and the unanswered and the unfinished still far outstrip our col" +
            "lective comprehension. No man can fully grasp how far and how fast we have come," +
            " but condense, if you will, the 50,000 years of man's recorded history in a time" +
            " span of but a half-century. Stated in these terms, we know very little about th" +
            "e first 40 years, except at the end of them advanced man had learned to use the " +
            "skins of animals to cover them. Then about 10 years ago, under this standard, ma" +
            "n emerged from his caves to construct other kinds of shelter. Only five years ag" +
            "o man learned to write and use a cart with wheels. Christianity began less than " +
            "two years ago. The printing press came this year, and then less than two months " +
            "ago, during this whole 50-year span of human history, the steam engine provided " +
            "a new source of power. Newton explored the meaning of gravity. Last month electr" +
            "ic lights and telephones and automobiles and airplanes became available. Only la" +
            "st week did we develop penicillin and television and nuclear power, and now if A" +
            "merica's new spacecraft succeeds in reaching Venus, we will have literally reach" +
            "ed the stars before midnight tonight.";
    session.send(voiceMessage);
});

// END OF LINE