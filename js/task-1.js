const categoriesList = document.querySelector('#categories')

const categoriesElements = categoriesList.querySelectorAll('li.item')

categoriesElements.forEach(categoryElement => {
	const categoryTitle = categoryElement.querySelector('h2').innerHTML
	const categoryElements = categoryElement.querySelectorAll('ul li')
	console.log(`Category: ${categoryTitle}`)
	console.log(`Elements: ${categoryElements.length}`)
})

console.log('Number of categories:', categoriesElements.length)
