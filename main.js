const myCheck = document.querySelector('.link-check');
const myColors = document.querySelectorAll('.item');
const submit1 = document.querySelector('.submit1');

myCheck.addEventListener('click', function() {
    for (var myColor of myColors) {
        myColor.classList.toggle('disabled');
    }
    submit1.classList.toggle('disabled');
})

