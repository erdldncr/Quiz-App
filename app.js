const username=document.getElementById('username')
const modal=document.querySelector('.modal')


document.addEventListener('keydown',removeModal)
function removeModal(e){
    console.log(e.key)
    console.log(username.value)
    if(!!username.value && e.key=='Enter'){
    modal.classList.add('hidden')
    }
}