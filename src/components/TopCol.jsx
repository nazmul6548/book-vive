

function TopCol({item}) {
    const {publisher,author,image} =item
  return (
    <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
	
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src={image} />
				<p className="text-xl font-semibold leading-tight">{author}</p>
				<p className="dark:text-gray-600">{publisher}</p>
			</div>
			
		</div>
	
</section>
  )
}

export default TopCol