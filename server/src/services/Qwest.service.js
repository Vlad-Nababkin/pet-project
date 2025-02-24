const {Qwest} = require('../db/models')

class QwestService {
  static async getAll() {
    return await Qwest.findAll()
  }
}

module.exports = QwestService