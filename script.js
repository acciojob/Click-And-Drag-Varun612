// Your code here.
const items=document.querySelectorAll('.item');
let currentItem=null, offsetX, offsetY;
items.forEach(item => {
	item.addEventListener('mousedown', (e) => {
		currentItem=item;
		offsetX = e.clientX - currentItem.getBoundingClientRect().left;
		offsetY = e.clientY - currentItem.getBoundingClientRect().top;

		document.addEventListener('mousemove', onMouseMove);
	});
});

function onMouseMove(e) {
	if(currentItem) {
		const container = document.querySelector('.items');
		const containerRect = container.getBoundingClientRect();
		let newX = e.clientX - containerRect.left - offsetX;
		let newY = e.clientY - containerRect.top - offsetY;

		//Boundary conditions
		newX = Math.max(0, Math.min(newX, containerRect.width-currentItem.offsetWidth));
		newY = Math.max(0, Math.min(newY, containerRect.height-currentItem.offsetHeight));

		currentItem.style.left = newX+'px';
		currentItem.style.top = newY+'px';
	}
}

document.addEventListener('mouseup', () => {
	currentItem=null;
	document.removeEventListener('mousemove', onMouseMove);
});

