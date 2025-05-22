// Your code here.
const items=document.querySelectorAll('.items');
let isDragging = false;
let currentItem;
items.forEach((item,index) => {
	// const item = document.querySelector('.item');
	item.addEventListener('mousedown', (e) => {
		isDragging=true;
		currentItem=item;
	});
		
});
document.addEventListener('mousemove', (e) => {
	if(isDragging && currentItem){
		currentItem.style.left = e.pageX + 'px';
		currentItem.style.top = e.pageY + 'px';
	}
});
document.addEventListener('mouseup', () => {
	isDragging=false;
	currentItem=null;
});
