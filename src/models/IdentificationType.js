const { Schema, model } = require('mongoose');

const identificationTypeSchema = new Schema({
  description: { type: String, required: true }
},
{
  timestamps: true,
  versionKey: false
});

const IdentificationType = model('IdentificationType', identificationTypeSchema);

module.exports = IdentificationType;