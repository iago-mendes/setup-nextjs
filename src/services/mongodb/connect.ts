import getConfig from 'next/config'
import {MongoClient, Db} from 'mongodb'

const {serverRuntimeConfig: env} = getConfig()

let cached = (global as any).mongo

if (!cached)
	cached = (global as any).mongo = {conn: null, promise: null}

async function connect(): Promise<{client: MongoClient, db: Db}>
{
	console.log('<< env >>', env)
	console.log('<< env.mongodbUri >>', env.mongodbUri)

	if (cached.conn)
		return cached.conn

	if (!cached.promise)
	{
		const opts =
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}

		cached.promise = MongoClient.connect(env.mongodbUri, opts).then(client =>
		{
			return {
				client,
				db: client.db(env.mongodbDb),
			}
		})
	}

	cached.conn = await cached.promise
	return cached.conn
}

export default connect