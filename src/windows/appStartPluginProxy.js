
module.exports = {
    start: function(successCallback, errorCallback, strInput) {
        var app = new OpenApp.App();
		var token = strInput.token;
		var username = strInput.username
        app.start(token, username).then(function(){ successCallback(); });
    }
}

require("cordova/exec/proxy").add("App", module.exports);