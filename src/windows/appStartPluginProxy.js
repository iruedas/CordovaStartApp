
module.exports = {
    start: function(successCallback, errorCallback, strInput) {
        var app = new OpenApp.App();
		var token = strInput.token;
        app.start(token).then(function(){ successCallback(); });
    }
}

require("cordova/exec/proxy").add("App", module.exports);