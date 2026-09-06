# Project Related to DOM !

## Project Link
[Click here](https://stackblitz.com/~/github.com/ankithttps/DOM-Project)

# Solution Code

## Projects 1

```javaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);

        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
        }

        if (e.target.id === 'white') {
            body.style.backgroundColor = 'white';
        }

        if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        }

        if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
        
    });
});

```