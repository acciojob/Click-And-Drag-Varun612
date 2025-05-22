// Your code here.
const items=document.querySelectorAll('.item');
let isDragging = false;
let currentItem, offsetX, offsetY;
items.forEach((item) => {
	// const item = document.querySelector('.item');
	item.addEventListener('mousedown', (e) => {
		isDragging=true;
		currentItem=item;
		offsetX = e.clientX-currentItem.getBoundingClientRect().left;
		offsetY = e.clientY-currentItem.getBoundingClientRect().top;

		currentItem.classList.add("active");
	});
		
});
document.addEventListener('mousemove', (e) => {
	if(isDragging && currentItem){
		currentItem.style.left = (e.clientX-offsetX) + 'px';
		currentItem.style.top = (e.clientY-offsetY) + 'px';
	}
});
document.addEventListener('mouseup', () => {
	if(currentItem) {
		currentItem.classList.remove('active');
	}
	isDragging=false;
	currentItem=null;
});
