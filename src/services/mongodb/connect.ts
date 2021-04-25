import getConfig from 'next/config'
import {MongoClient, Db} from 'mongodb'

const {serverRuntimeConfig: env} = getConfig()

let cached = (global as any).mongo

if (!cached)
	cached = (global as any).mongo = {conn: null, promise: null}

export async function connectToDatabase(): Promise<{client: MongoClient, db: Db}>
{
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