var fruits = ["apple","mango","banana"];
var fruits = ["apple",2,8,10,"mango",true,"banana",1,8];


var aakash = new Array{

}


var num = [1,2,3,[4,5,6,[7,8,9],10,11],12,13]

var num = [1,2,3,[4,5,6,[7,8,9],10,11],12,13]
undefined
num[3]
(6) [4, 5, 6, Array(3), 10, 11]
num[3][0]
4
num[0][3]
undefined
num[0][2]
undefined
num[3][3]
(3) [7, 8, 9]
num[3][3][0]
7
num[3][3][1]
num[3][4]

var first = [1,2,3,4,5,6,7,8,9]

var first = [1,2,3,4,5,6,7,8,9]
undefined
first.pop()
9
first
(8) [1, 2, 3, 4, 5, 6, 7, 8]
first.pop(2)
8
first
(7) [1, 2, 3, 4, 5, 6, 7]
first.push("a")
8
first
(8) [1, 2, 3, 4, 5, 6, 7, "a"]
first.push("javascript")
9
first
(9) [1, 2, 3, 4, 5, 6, 7, "a", "javascript"]
first.push(10)
10
first
(10) [1, 2, 3, 4, 5, 6, 7, "a", "javascript", 10]


var first = [1,2,3,4,5,6,7,8,9]
undefined
first.shift()
1
first
(8) [2, 3, 4, 5, 6, 7, 8, 9]
first.unshift("hi")
9
first
(9) ["hi", 2, 3, 4, 5, 6, 7, 8, 9]


var first = [1,2,3,4,5,6,7,8,9]
undefined
first.splice(2,0,"a","b")
[]
first
(11) [1, 2, "a", "b", 3, 4, 5, 6, 7, 8, 9]
first.splice(2,2,"a","b")
(2) ["a", "b"]
first
(11) [1, 2, "a", "b", 3, 4, 5, 6, 7, 8, 9]
first.splice(2,2,"c","d")
(2) ["a", "b"]
first
(11) [1, 2, "c", "d", 3, 4, 5, 6, 7, 8, 9]
first.splice(4,2,"c","d")
(2) [3, 4]
first
(11) [1, 2, "c", "d", "c", "d", 5, 6, 7, 8, 9]
first.splice(4,0,"e","f")
[]
first
(13) [1, 2, "c", "d", "e", "f", "c", "d", 5, 6, 7, 8, 9]
first.splice(4,0,"hi","hey")
[]
first
(15) [1, 2, "c", "d", "hi", "hey", "e", "f", "c", "d", 5, 6, 7, 8, 9]
first.splice(4,2,"hi2","hey2")
(2) ["hi", "hey"]
first
(15) [1, 2, "c", "d", "hi2", "hey2", "e", "f", "c", "d", 5, 6, 7, 8, 9


var first = [1,2,3,4,5,6,7,8,9]
undefined
first.slice(2)
(7) [3, 4, 5, 6, 7, 8, 9]
first
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
var a = first.slice(2)
undefined
a
(7) [3, 4, 5, 6, 7, 8, 9]
var a = first.slice(1,2)
undefined
a
[2]0: 2length: 1__proto__: Array(0)
a
[2]
first
(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]0: 11: 22: 33: 44: 55: 66: 77: 88: 9length: 9__proto__: Array(0)
var a  = first.slice(1,3)
undefined
a
(2) [2, 3]


var a  = ["hi","hey"]
undefined
var b = ["navneth","ranjith"]
undefined
a.concat(b)
(4) ["hi", "hey", "navneth", "ranjith"]
b.concat
function concat() { [native code] }
b.concat(a)
(4) ["navneth", "ranjith", "hi", "hey"]
var c=["javascript","jquery"]
undefined
a.concat(b,c)
(6) ["hi", "hey", "navneth", "ranjith", "javascript", "jquery"]






