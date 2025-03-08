var city = ["delhi","helsinki","amsterdam","venice","zodic"]
undefined
city.length
5
city.[0]
VM10221:1 Uncaught SyntaxError: Unexpected token '['Understand this errorAI
city[0]
'delhi'
city[1]
'helsinki'
city[2]
'amsterdam'
city[3]
'venice'
city[4]
'zodic'
city[city.length-1]
'zodic'
city[city.length-2]
'venice'

var city = ["London","Delhi","pune","Helsinki"]
undefined
city.push('London')
5
city.length
5
city
(5) ['London', 'Delhi', 'pune', 'Helsinki', 'London']
city.push('Bihar')
6
city
(6) ['London', 'Delhi', 'pune', 'Helsinki', 'London', 'Bihar']

city.pop()
'Bihar'
city
(5) ['London', 'Delhi', 'pune', 'Helsinki', 'London']
city.pop()
'London'
city
(4) ['London', 'Delhi', 'pune', 'Helsinki']

var city = ["London","Helsinki","Paris","new york"]
undefined
city.pop(2)
'new york'
city.pop(20000)
'Paris'
city
(2) ['London', 'Helsinki']
city.unshift('Boston')
3
city
(3) ['Boston', 'London', 'Helsinki']
city.unshift('hawai')
4
city
(4) ['hawai', 'Boston', 'London', 'Helsinki']
city.shift()
'hawai'
city
(3) ['Boston', 'London', 'Helsinki']

push> add in the end of Array
pop> remove in the end of Array
shift > remove the first value of the array
unshift > add as a first value of the array.

var city = ["Amsterdam","Delhi","Venice","Indore","London","Pune","Mumbai"]
undefined
city.splice(2,3,'pataya','Goa')
(3) ['Venice', 'Indore', 'London']
city
(6) ['Amsterdam', 'Delhi', 'pataya', 'Goa', 'Pune', 'Mumbai']