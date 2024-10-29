document.getElementById('item-2').addEventListener('click',function(event){
    console.log('item-2 clicked');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
document.getElementById('item-3').addEventListener('click',function(){
    console.log('item-3 clicked');
    
})
document.getElementById('item-4').addEventListener('click',function(){
    console.log('item-4 clicked');
})
document.getElementById('item-5').addEventListener('click',function(){
    console.log('item-5 clicked');
})
document.getElementById('item-6').addEventListener('click',function(){
    console.log('item-6 clicked');
})
document.getElementById('item-container').addEventListener('click',function(){
    console.log('item-list clicked');
})