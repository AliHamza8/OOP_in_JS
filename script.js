const user = {
    username: "Ali",
    loginCount: 5,
    getUserDetails: function() {
        console.log("Value: ", `${this.loginCount}`)
    }
}

function userDetails(username, loginCount) {
    this.username = username
    this.loginCount = loginCount
    return this
}

let userOne = new userDetails("Ali", 2)
console.log(userOne)