var getHTML = require('./http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printHTML (html) {


  // function L337(str) {
  //   return str.replace(/[a-z]/g,function f(a){
  //     return "4BCD3F6H1JKLMN0PQR57"[parseInt(a, 36)-10] || a.replace(/[a-t]/gi,f)
  //   });
  // }

  function LeetTest(str){
    return str.replace(/a/g, "4").replace(/e/g, "3").replace(/er/g, "0r").replace(/you/g, "j00");
  }

  console.log(LeetTest(html));


}


getHTML(requestOptions, printHTML);

// function LeetTest(str){
//   return str.replace(/[a]/g: "4", /[e]/g: "3", /[l]/g :"1")
// }


// a : '4', e : '3', l : '1', o : '0', s : '5', t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
