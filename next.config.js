const withImages = require('next-images')

module.exports = withImages(
{
	esModule: true,
	serverRuntimeConfig:
	{
		mongodbUri: process.env.MONGODB_URI,
		mongodbDb: process.env.MONGODB_DB
	},
	publicRuntimeConfig:
	{}
})