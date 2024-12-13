var englishLang = true;

function toggleLanguage() {
  var enLanguageElements = document.getElementsByClassName('en');
  var svLanguageElements = document.getElementsByClassName('sv');
 
  for (var i = 0; i < enLanguageElements.length; i++) {
    if(englishLang) {
      enLanguageElements[i].style.display = "none";
    } else {
      enLanguageElements[i].style.display = "block";
    }
  }
  
  for (var i = 0; i < svLanguageElements.length; i++) {
    if(englishLang) {
      svLanguageElements[i].style.display = "block";
    } else {
      svLanguageElements[i].style.display = "none";
    }
  }
  
  englishLang = !englishLang;
}

function portraitPrint() {
  window.print();
}

function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}


