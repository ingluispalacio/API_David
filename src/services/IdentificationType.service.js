const IdentificationTypeModel = require('../models/IdentificationType');

class IdentificationTypeService { 
  
    constructor() {}

    async find(where={}) {
      const res = await IdentificationTypeModel.find(where);
      return res;
    }

    async findById(id) {
      const res = await IdentificationTypeModel.findById(id);
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async create(data) {
      const res = await IdentificationTypeModel.create(data);
      return res;
    }

    async update(id, data) {
      const res = await IdentificationTypeModel.findByIdAndUpdate(id, data, {new:true});
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async delete(id) {
      await IdentificationTypeModel.findByIdAndDelete(id);
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return { deleted: true };
    }
  
  }
  
  module.exports = IdentificationTypeService;