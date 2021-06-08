import {NextApiHandler} from 'next'

import connect from '../../services/mongodb/connect'

const submit: NextApiHandler = async (req, res) =>
{
	const {name, email, phone, topic}:
	{
		name?: string
		email?: string
		phone?: string
		topic?: string
	} = req.body

	if (!name || !email || !phone || !topic)
	{
		res.statusCode = 400
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({message: 'You need to fill all fields!'}))
	}
	
	const data =
	{
		name,
		email,
		phone,
		topic
	}
	
	const {db} = await connect()
	const Clients = db.collection('clients')
	const result = await Clients.insertOne(data)

	if (result.insertedId)
	{
		res.statusCode = 200
		res.setHeader('Content-Type', 'application/json')
		return res.end()
	}
	else
	{
		console.log('<< result >>', result)

		res.statusCode = 500
		res.setHeader('Content-Type', 'application/json')
		return res.end(JSON.stringify({message: 'Internal error!'}))
	}
}

export default submit