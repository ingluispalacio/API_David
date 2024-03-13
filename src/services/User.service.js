const UserModel = require('../models/User');

class UserService { 
  
    constructor() {}

    async find(where={}) {
      const res = await UserModel.find(where);
      return res;
    }

    async findById(id) {
      const res = await UserModel.findById(id);
      return res;
    }


    async create(data) {
      const res = await UserModel.create(data);;
      return res;
    }

    async update(id, data) {
      const res = await UserModel.findByIdAndUpdate(id, data, {new:true});
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async delete(id) {
      const res = await UserModel.findByIdAndDelete(id);
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }

    async login(identificationTypeId, identificationNumber) {
      const res = await UserModel.findOne({identificationTypeId, identificationNumber });
      if (!res) {
        const error = new Error('Identification type not found');
        error.statusCode = 404; 
        throw error;
      }
      return res;
    }
  
  }
  
  module.exports = UserService;