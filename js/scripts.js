var wordCount = function(phrase) {
  var wordArray = phrase.split(" ");
  var words = {};
  var sortedWords = [];

  for (var i = 0; i < wordArray.length; i += 1) {
    var word = wordArray[i];
    words[word] = (words[word] || 0) + 1;
  }

  for(var property in words) {
    sortedWords.push([property, words[property]]);
  }

  sortedWords.sort(function(a, b) {return b[1] - a[1]})

  var html = "<ul>";
  for (var j = 0; j < sortedWords.length; j += 1) {
    html += "<li>" + sortedWords[j][0] + " : " + sortedWords[j][1] + "</li>";
  }
  html += "</ul>";
  return html;
}

$(document).ready(function() {
  $("form#function").submit(function(event) {
    var phrase = $("input#input").val();
    var result = wordCount(phrase);

    document.getElementById("result").innerHTML = result;

    $("#result").show();
    event.preventDefault();
  });
});
