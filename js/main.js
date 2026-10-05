alert('it works')
/* wutang takes user input and resturns conssistent 
naming convention 
the porbably algo is user input translating into binary
 and based on the first name there is a binary code out put 
and last name 
it probably changes to 01 010101
sums the counts the total 1 and 0s to determine the ou put 


take user name , rnadom color hex code, date, 
a random number and anime characters
turn everything into binary 

the binary becomes the user input
goes to the api 
the api translates the bianry from an array 
of names and out puts names based on the sum and counts 
the sums and counts alllow for conssitent naming 
example 111 000 will always give the same output 

use the counts of 111 to find the 1st name component of qutang 
use the counts of 0 to determine the last name?
if the user inputs consistently theeir name, number 
date, chracters then the output will be consistent? 

potential 5 arrys connected to each input? 
and then take like 2-3 words to generate the name? 









*/


document.querySelector("#submit").addEventListener('click', function () {
    const name = document.getElementById("name").value;
    const color = document.getElementById("color").value
    const date = document.getElementById("date").value
    const number = document.getElementById("number").value;
    const character = document.getElementById("character").value;

    const combineInput = ` ${name}  ${color}  ${date}  ${number} ${character}`
    console.log(`the combined user input ${combineInput}`)
    
    
    const binary = combineInput.split("").map(character => 
        character.charCodeAt(0).toString(2)).join("");

    console.log(binary)


    fetch(`/api?wutang=${binary}`)
    .then(response => response.json())
    .then((data => {
        console.log(data)
        const result = document.createElement("h2")
        result.textContent = data.answer
        document.body.appendChild(result)

    }))
})