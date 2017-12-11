var exports = module.exports = {};

exports.makeChannel = function(message, name){
    var server = message.guild;
    server.createChannel(name, "text");
}