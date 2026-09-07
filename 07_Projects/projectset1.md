# Project Related to DOM !

## Project Link
[Click here](https://stackblitz.com/~/github.com/ankithttps/DOM-Project)

# Solution Code

## Projects 1 Solution

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

## Project 2 Solution 

```javaScript


const form = document.querySelector('form')
// this use case will give u empty
//const height =  parseInt( document.querySelector('#height').value)

form.addEventListener('submit' , function(e){
    e.preventDefault()

  const height =  parseInt( document.querySelector('#height').value)
  const weight =  parseInt( document.querySelector('#weight').value)
  const results =   document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
      results.innerHTML = `please give a valid height${height}`
  } else if(weight === '' || weight < 0 || isNaN(weight)){
      results.innerHTML = `please give a valid weight${weight}`
  }else{
   const BMI =  (weight /((height*height)/1000).toFixed(2))
   // Show result
  results.innerHTML = `<span>${BMI}</span>`;
  }
})

```

