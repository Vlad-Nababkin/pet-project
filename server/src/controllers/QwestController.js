const QwestService = require('../services/Qwest.service')
// const UserService = require('../services/User.service')
const formatResponse = require('../utils/formatResponse')

class QwestController {
	static async getAll(req, res) {
    try {
      const data = await QwestService.getAll()
			res.status(200).json(formatResponse(200, 'GOOD', data))
		} catch ({ message }) {
			console.error(message)
			res
				.status(500)
				.json(formatResponse(500, 'Internal server error', null, message))
		}
	}
}

module.exports = QwestController
