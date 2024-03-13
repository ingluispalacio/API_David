const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  identificationTypeId: { type: Schema.Types.ObjectId, ref: 'IdentificationType', required: true },
  identificationNumber: { type: Number, required: true }
},
{
  timestamps: true,
  versionKey: false
});

const User = model('User', userSchema);

module.exports = User;