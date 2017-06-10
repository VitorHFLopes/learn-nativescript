var observableModule = require("data/observable");

var user = new observableModule.fromObject({
    email: "user@domain.com",
    password: "password"
});

var frameModule = require("ui/frame");
var page;
var email;

exports.signIn = function() {
    email = page.getViewById("email");
    console.dir(user);
};

exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
};