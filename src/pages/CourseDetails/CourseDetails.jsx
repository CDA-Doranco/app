import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
	// fetch sur l'URL /courses/1 où 1 est l'id recherché
	const { id } = useParams()
	const [state, setState] = useState({
		loading: true,
		data: [],
		error: null,
	})

	useEffect(() => {
		fetch(`http://localhost:4000/courses/${id}`)
			.then(response => {
				if (response.status === 404) {
					throw Error('Plat introuvable')
				}
				return response.json()
			})
			.then(data => {
				setState({
					loading: false,
					data: data,
					error: null,
				})
			})
			.catch(error => {
				setState({
					loading: false,
					data: [],
					error: error.message
				})
			})
	}, [])

	if (state.loading) {
		return (
			<div>Chargement...</div>
		)
	}

	if (state.error) {
		return (
			<div>{state.error}</div>
		)
	}

	return (
		<article>
			<h2>{state.data.name}</h2>
			<img src={`http://localhost:3000/${state.data.image}`} alt={state.data.name} />
			<p>{state.data.description}</p>
			<p>{state.data.price}</p>
			<ul>
				{state.data.categories.map((category, index) => <li key={index}>{category}</li>)}
			</ul>
			{state.data.popular && <p>Plat Populaire</p>}
		</article>
	)
}

export default CourseDetails