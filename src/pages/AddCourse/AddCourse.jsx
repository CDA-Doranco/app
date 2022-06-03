import { useState, useRef } from "react"

const AddCourse = () => {
	const courseNameInput = useRef(null)
	const descriptionInput = useRef(null)
	const popularInput = useRef(null)
	const [price, setPrice] = useState('500')

	const submitForm = () => {
		const courseName = courseNameInput.current.value
		const description = descriptionInput.current.value
		fetch('http://localhost:4000/courses', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: courseName,
				description: description,
				price: price,
				image: "/aucune.jpg",
				categories: [],
				popular: popularInput.current.checked,
			})
		}).then(res => res.json())
		.then(data => console.log(data))
		.catch(err => console.error(err))
	}

	const onChangePrice = (event) => {
		// Je récupère la valeur tapée par l'utilisateur grâce à event.target.value
		setPrice(event.target.value)
	}
	return (
		<div className='flex h-screen bg-gray-200 items-center justify-center'>
			<div className='grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2'>
				<div className='flex justify-center py-4'>
					<div className='flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300'>
						<svg
							className='w-8 h-8 text-white'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
							></path>
						</svg>
					</div>
				</div>

				<div className='flex justify-center'>
					<div className='flex'>
						<h1 className='text-gray-600 font-bold md:text-2xl text-xl'>
							Ajout d'un nouveau plat
						</h1>
					</div>
				</div>

				<div className='grid grid-cols-1 mt-5 mx-7'>
					<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
						Nom du plat
					</label>
					<input
						ref={courseNameInput}
						className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
						type='text'
						placeholder='Nom du plat'
					/>
				</div>

				<div className='grid grid-cols-1 mt-5 mx-7'>
					<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
						Description
					</label>
					<input
						ref={descriptionInput}
						className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
						type='text'
						placeholder='Description'
					/>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7'>
					<div className='grid grid-cols-1'>
						<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>
							Prix (en centimes)
						</label>
						<input
							className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
							type='number'
							placeholder='Prix'
							min='0'
							value={price}
							onChange={onChangePrice}
						/>
					</div>
				</div>

				<div className='grid grid-cols-1 mt-5 mx-7'>
					<fieldset>
						<legend className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>Catégories</legend>
						<div className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'>
							<input type="checkbox" id='spicy' value='spicy' name='categories' />
							<label className='ml-1 mr-5' htmlFor="spicy">Épicé</label>
							<input type="checkbox" id='italian' value='italian' name='categories' />
							<label className='ml-1 mr-5' htmlFor="italian">Italien</label>
						</div>
					</fieldset>
				</div>

				<div className='grid grid-cols-1 mt-5 mx-7'>
					<fieldset>
						<legend className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold'>Populaire</legend>
						<div className='py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'>
							<input ref={popularInput} type="checkbox" id='popular' value='popular' name='popular' />
							<label className='ml-1 mr-5' htmlFor="popular">Plat populaire</label>
						</div>
					</fieldset>
				</div>

				<div className='grid grid-cols-1 mt-5 mx-7'>
					<label className='uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1'>
						Upload Photo
					</label>
					<div className='flex items-center justify-center w-full'>
						<label className='flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group'>
							<div className='flex flex-col items-center justify-center pt-7'>
								<svg
									className='w-10 h-10 text-purple-400 group-hover:text-purple-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
									></path>
								</svg>
								<p className='lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider'>
									Select a photo
								</p>
							</div>
							<input type='file' className='hidden' />
						</label>
					</div>
				</div>

				<div className='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
					<button className='w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
						Annuler
					</button>
					<button onClick={submitForm} className='w-auto bg-purple-500 hover:bg-purple-700 rounded-lg shadow-xl font-medium text-white px-4 py-2'>
						Ajouter
					</button>
				</div>
			</div>
		</div>
	)
}

export default AddCourse
