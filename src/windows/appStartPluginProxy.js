
module.exports = {
    start: function(successCallback, errorCallback, strInput) {
        var app = new OpenApp.App();
        app.start("crm:");
    }
}

require("cordova/exec/proxy").add("App", module.exports);