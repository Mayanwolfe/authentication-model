const Mongoose = require("mongoose")
const RemoteDB = `Connection String Goes Here`
const connectDB = async () => {
  Mongoose.connect(RemoteDB)
  .then(client => {
    console.log("MongoDB Connected")
  })
}
module.exports = connectDB