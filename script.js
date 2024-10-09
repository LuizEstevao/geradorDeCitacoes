function generate() {
  var quotes = {
    "- Albert Einstein" :
      '"Não podemos resolver problemas com o tipo de pensamento que empregamos quando os criamos."',
    "- Mahatma Gandhi" :
      '"Aprenda como se você fosse viver para sempre, viva como se você fosse morrer amanhã"',
    "- Mark Twain" :
      '"Fique longe dessas pessoas que tentam menosprezar suas ambições. Mentes pequenas sempre farão isso, mas mentes grandes lhe darão a sensação de que você também pode se tornar grande"',
    "- Steve Jobs" :
      '"Seu trabalho vai preencher uma grande parte da sua vida, e a única maneira de ficar verdadeiramente satisfeito é fazer o que você acredita ser um ótimo trabalho. E a única maneira de fazer um ótimo trabalho é amar o que você faz. Se você ainda não encontrou, continue procurando. Não se acomode. Como em todos os assuntos do coração, você saberá quando encontrar."',
  }

var authors = Object.keys(quotes);

var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").innerHTML = quote;

document.getElementById("author").innerHTML = author;
}
