var content = 'Warcraft3.'

var passwordUser = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#.\$%\^&\*])(?=.{8,})");
function check(value) {
    if (passwordUser.test(value)) {
        return 'Accept'
     } else {
        return 'Retry'
    }
};

console.log(check(content));
