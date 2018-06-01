app = function(token, callback, errorCallback) {
    return cordova.exec(callback, errorCallback, "App", "start", {token: token});
};