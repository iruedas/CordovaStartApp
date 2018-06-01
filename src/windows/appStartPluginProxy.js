
module.exports = {
    start: function(successCallback, errorCallback, strInput) {
        var app = new OpenApp.App();
		var token = strInput.token;
        return app.start(token);
    }
}

require("cordova/exec/proxy").add("App", module.exports);