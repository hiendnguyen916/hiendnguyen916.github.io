function makeTextBigger() {
    var textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
  }
  
  function applyTextStyle() {
    var textArea = document.getElementById("textInput");
    var fancyRadioButton = document.getElementById("fancyRadio");
    
    if (fancyRadioButton.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  function addMooSuffix() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;
    var uppercasedText = text.toUpperCase();
    var sentences = uppercasedText.split(".");
    for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].trim();
      if (sentence !== "") {
        var words = sentence.split(" ");
        var lastWord = words[words.length - 1];
        words[words.length - 1] = lastWord + "-Moo";
        sentences[i] = words.join(" ");
      }
    }
    var modifiedText = sentences.join(". ");
    textArea.value = modifiedText;
  }