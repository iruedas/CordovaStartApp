device = {
    start: function () {
        var app = new OpenApp.App();
        app.start("crm:");
    }
}

window.device = function(callback) {
    cordova.exec(callback, function(err) {
        callback('Error while starting the app');
    }, "App", "start", []);
};