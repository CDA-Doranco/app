const CategoryCard = (props) => {
	const { category, color, image } = props
	return (
		<li className='flex flex-col relative m-2 items-center w-14'>
			<div className='w-5 h-5 rounded-full absolute left-0 z-0' style={{backgroundColor: color}}></div>
			<img className='w-8 z-10' src={image} alt={category} />
			<span className='pt-3'>{category}</span>
			<svg width="40" height="15" viewBox="0 0 98 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.5 17.5C0.5 17.5 85 -17.5 98 12.4972C62.3411 -2.52455 0.5 17.5 0.5 17.5Z" fill={color} />
			</svg>
		</li>
	)
}

export default CategoryCard