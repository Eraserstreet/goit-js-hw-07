const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
]

const photoList = document.querySelector('.gallery')
const itemArr = images.map(image => {
	const photoItem = document.createElement('li')
	photoItem.classList.add('gallery-item')
	const img = document.createElement('img')
	img.src = image.url
	img.alt = image.alt

	photoItem.append(img)

	return photoItem
})
photoList.append(...itemArr)
