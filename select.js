const _people= document.querySelector('#people')
const _submit= document.querySelector('#submit')
const _option= document.querySelector('option')

let peopleValue = ''

peopleValue = _option.innerText

_people.addEventListener('change', () =>{
    peopleValue =_people.value
})

_submit.addEventListener('click', () =>{
    console.log('current value of people: ', peopleValue)
})