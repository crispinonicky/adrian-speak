// Adrian speak

function adrianSpeak(sentence) {

  let wordBank = ['🍌', '🦍'];

  let wordArr = sentence.split(" ")

  wordArr.forEach((x, i) =>{
    wordArr.splice(i, 1, wordArr[i] + " " + wordBank[Math.floor(Math.random() * wordBank.length)])
  })

  document.write(wordArr.join(" "))
  
}

adrianSpeak(prompt("Convert your sentence to adrian speak"))

