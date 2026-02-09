const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }
})

UserSchema.index({ email: 1 }, { unique: true }) // UNIQUE INDEX

module.exports = mongoose.model('User', UserSchema)
