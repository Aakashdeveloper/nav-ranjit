var a = "i am here"
undefined
a.toUpperCase()
"I AM HERE"
a.toLowerCase
function toLowerCase() { [native code] }
a.toLowerCase()
"i am here"



var b = "i am doing javascript"
b.repeat(2)


var a = " i am here "
undefined
a.trim()
"i am here"

var w = " hi i am "
undefined
w
" hi i am "
var v = "javascript"
undefined
a.concat(b)
VM595:1 Uncaught ReferenceError: b is not defined
    at <anonymous>:1:10
(anonymous) @ VM595:1
w.concat(v)
" hi i am javascript"
w+v
" hi i am javascript"



  var t = " HELLO world"
undefined
t.slice(5,2)
""
t
" HELLO world"
t.trim()
"HELLO world"
""
t.slice(1,2)
"H"
t.slice(2,5)
"ELL"
t.slice(2,7)
"ELL"7