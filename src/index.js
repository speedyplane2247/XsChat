/*
XsChat v7.0.0 Client BootStrapper
---------------------------------
Developer Beta 6
---------------------------------
(c) speedyplane2247 2019
*/
//var $enc = new Object();
//var encrypt = CryptoJS.AES.encrypt
//var decrypt = CryptoJS.AES.encrypt
if (document.cookie.indexOf("didaccept") == -1) {
    alert("We are having some problems with encryption. For the time being, older engines will be used for temporary encryption / decryption.")
    document.cookie = "ok=didaccept"
} else {
    // do nothing
}
var $enc = new Object();
if (navigator.userAgent.indexOf("Firefox") == -1) {
    alert("XsChat v7.0.0 reccomends Firefox for easier data transfer.")
    $enc.doTheFox = 0
} else {
    $enc.doTheFox = 1
}

function init() {
$enc.message = document.getElementById("message_1").value
$enc.key = document.getElementById("key_1").value
}
function encrypt() {
encryptedAES = btoa($enc.message)// CryptoJS.AES.encrypt($enc.message, $enc.key);
if ($enc.doTheFox == 1) {
alert(encryptedAES)//.toString(CryptoJS.enc.Utf8))
} else {
alert("Your browser is not optimized for XsChat and the data has been printed to the console.")
console.log(String(encryptedAES))
}
}
function decrypt() {
    decryptedBytes = atob(encryptedAES)//CryptoJS.AES.decrypt($enc.message, $enc.key);
    if ($enc.doTheFox == 1) {
    alert(decryptedBytes)//.toString(CryptoJS.enc.Utf8))
    } else {
        alert("Your browser is not optimized for XsChat and the data has been printed to console.")
        console.log(String(decryptedBytes))
    }
}
