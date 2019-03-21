/*
XsChat v7.0.0 Client BootStrapper
---------------------------------
RTM Build: No Patches
---------------------------------
(c) speedyplane2247 2019
*/
var $enc = new Object();
if (navigator.userAgent.indexOf("Firefox") == -1) {
    console.warn("XsChat v7.0.0 reccomends Firefox for easier data transfer.")
    $enc.doTheFox = 0
} else {
    $enc.doTheFox = 1
}

function init() {
$enc.message = document.getElementById("message_1").value
$enc.key = document.getElementById("key_1").value
}
function xencrypt() {
    $enc.encs1 = split($enc.message)
    $enc.encs2 = btoa($enc.encs1)
    if ($enc.doTheFox == 1) {
        alert($enc.encs2)
    } else {
        alert($enc.encs2)
        console.log($enc.encs2)
    }
}
function xdecrypt() {
    $enc.dencs2 = atob($enc.message)
    $enc.dencs4 = join($enc.dencs2)
    if ($enc.doTheFox == 1) {
        alert(join($enc.dencs4))
    } else {
        alert($enc.dencs4)
        console.log($enc.dencs4)
    }
}
/*
Thank you https://codereview.stackexchange.com/questions/173562/simple-string-scrambling 
OwChallie is a thank you men!
*/
const split = (text) => {
    let n = Math.floor(text.length / 2)
    return text.split('').reduce((a, v, i) => {
      a[i % 2 ? (i - 1) / 2 : n + (i / 2)] = v
      return a
    }, []).join('')
  }
  
  const join = (text) => {
    let n = Math.floor(text.length / 2)
    return text.split('').reduce((a, v, i) => {
      a[i < n ? (i + 1) * 2 - 1 : (i - n) * 2] = v
      return a
    }, []).join('')
  }
  
  const encrypt = (text, n) => {
    if (text == null) {
      return null
    }
  
    for (let i = 0; i < n; i++) {
      text = split(text)
    }
  
    return text
  }
  
  const decrypt = (text, n) => {
    if (text == null) {
      return null
    }
  
    for (let i = 0; i < n; i++) {
      text = join(text)
    }}