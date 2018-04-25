// Only do work when the DOM has loaded and is ready.
document.addEventListener("DOMContentLoaded", function(event) {

  let code = document.getElementById("codeArea").value
  replaceCode(code)

});

function replaceCode(code) {

  let readReg = /\b(read)/g,
      outputReg = /\b(output|sort)/g,
      eqReg = /\b(eq|notEq)/g,
      conjReg = /\b(\s\^)/g,
      commentReg = /(\/\/.*)/g,
      equalsReg = /\b(\s\=)/g,
      numReg = /\b([0-9]+)/g;

  let htmlTagReg = /(&lt;[^\&]*&gt;)/g

  let str = code.replace(readReg,'<span class="read">$1</span>')
  str = str.replace(outputReg,'<span class="output">$1</span>')
  str = str.replace(eqReg,'<span class="eq">$1</span>')
  str = str.replace(conjReg,'<span class="conj">$1</span>')
  str = str.replace(commentReg,'<span class="comment">$1</span>')
  str = str.replace(equalsReg,'<span class="equals">$1</span>')
  str = str.replace(numReg,'<span class="num">$1</span>')



  document.getElementsByTagName("pre")[0].innerHTML = str
}

function update() {
  let code = document.getElementById("codeArea").value
  replaceCode(code)
}
