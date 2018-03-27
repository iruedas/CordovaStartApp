cordova.commandProxy.add("App", {
    start: function(successCallback, errorCallback, strInput) {
        var app = new OpenApp.App();
        app.start("crm:");
    }
});