const user = {
    username: "Ali",
    loginCount: 5,
    getUserDetails: function() {
        console.log("Value: ", `${this.loginCount}`)
    }
}

console.log(user.getUserDetails())