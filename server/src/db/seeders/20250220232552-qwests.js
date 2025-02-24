'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Qwests',
			[
				{
					title: 'PEDING',
					price: 225,
					description: 'very comfortable',
				},
				{
					title: 'PETING',
					price: 215,
					description: 'very aforable',
				},
				{
					title: 'MEETING',
					price: 256,
					description: 'very qwestly',
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Qwests', null, {})
	},
}
