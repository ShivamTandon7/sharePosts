const mongoose = require("mongoose");
class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://admin:admin11@twitterclonecluster.ql3gq.mongodb.net/TwitterCloneDB?retryWrites=true&w=majority")
        .then(()=> {
         console.log("database connection successful");
        })
        .catch((err)=> {
            console.log("database connection error" +err);
        })
    }
}

module.exports = new Database();