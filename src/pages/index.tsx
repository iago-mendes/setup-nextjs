import Head from 'next/head'
import {FormEvent, useState} from 'react'

import Container from '../styles/pages/index'

const Home: React.FC = () =>
{
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [topic, setTopic] = useState('')

	function handleSubmit(e: FormEvent)
	{
		e.preventDefault()
	}

	return (
		<Container>
			<Head>
				<title>Home</title>
			</Head>

			<section id='form'>
				<div className='display'>
					<h1>BECOME AN EXPERT IN ASTRONOMY</h1>
				</div>

				<form onSubmit={handleSubmit} >
					{/* name */}
					<div className='field'>
						<label htmlFor='name'>Name</label>
						<input
							name='name'
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							placeholder='E.g.: Rodney Chambers'
						/>
					</div>
					{/* email */}
					<div className='field'>
						<label htmlFor='email'>E-mail</label>
						<input
							name='email'
							type='text'
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='E.g.: example@gmail.com'
						/>
					</div>
					{/* phone */}
					<div className='field'>
						<label htmlFor='phone'>Phone number</label>
						<input
							name='phone'
							type='text'
							value={phone}
							onChange={e => setPhone(e.target.value)}
							placeholder='E.g.: 111-222-3333'
						/>
					</div>
					{/* topic */}
					<div className='field'>
						<label htmlFor='topic'>Favorite topic</label>
						<input
							name='topic'
							type='text'
							value={topic}
							onChange={e => setTopic(e.target.value)}
							placeholder='E.g.: Cosmology'
						/>
					</div>

					<button type='submit'>
						Lift off in this journey
					</button>
				</form>
			</section>
		</Container>
	)
}

export default Home