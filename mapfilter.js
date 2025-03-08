// map 
var a = [2,4,6,8,10,12,14]
undefined
a.map((data)=>{return `<p>${data*2}</p>`})
(7) ['<p>4</p>', '<p>8</p>', '<p>12</p>', '<p>16</p>', '<p>20</p>', '<p>24</p>', '<p>28</p>']

a.map((data)=>{return `<p>${data*3}</p>`})
(7) ['<p>6</p>', '<p>12</p>', '<p>18</p>', '<p>24</p>', '<p>30</p>', '<p>36</p>', '<p>42</p>']

// filter 
var a = [2,4,8,10,13,17,18,25,38]
undefined
a.filter((data)=>{return data>25})
[38]

var a = [2,4,8,10,13,17,18,25,38]
undefined
a.filter((data)=>{return data>25})
[38]
a.map((data)=>{return data>25})
(9) [false, false, false, false, false, false, false, false, true]
a.map((data)=>{return data>10})
(9) [false, false, false, false, true, true, true, true, true]
a.map((data)=>{return data>13})
(9) [false, false, false, false, false, true, true, true, true]

var a = [0,1,2]
undefined
a.filter((data)=>{return data*2})
(2) [1, 2]