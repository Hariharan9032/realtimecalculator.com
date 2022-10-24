let string = "";
let input = document.querySelectorAll('li');
var btn = document.getElementById('btn');

Array.from(input).forEach((input) => {
    input.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.getElementById('inbox').value = string;

        } else if (e.target.innerHTML == 'clear') {
            string = " ";
            document.getElementById('inbox').value = string;

        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.getElementById('inbox').value = string;
        }
    })

})