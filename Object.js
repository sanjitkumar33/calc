var movie = {
    name: 'Jab We met',
    rating: 1.5,
    ind: 'Bollywood'
}

// object case
var movie = {
    name: 'Jab We met',
    rating: 1.5,
    ind: 'Bollywood'
}
undefined
movie.name
'Jab We met'
movie.rating
1.5
movie.ind
'Bollywood'

// Two movies in one object
var movie = [
    {
        "name":"Jab We Met",
        "rating":4.7,
        "ind":"Bollywood"
    },
    {
        "name":"Avengers",
        "rating":3.7,
        "ind":"Hollywood"
    }
]

 var movie = [
    {
        "name":"Jab We Met",
        "rating":4.7,
        "ind":"Bollywood"
    },
    {
        "name":"Avengers",
        "rating":3.7,
        "ind":"Hollywood"
    }
]
undefined
movie[1].name
'Avengers'
movie[0].name
'Jab We Met'
movie[0].rating
4.7
movie[1].name
'Avengers'

movie.map((data)=>{return data.name})
(2) ['Jab We Met', 'Avengers']
movie.map((data)=>{return data.rating})
(2) [4.7, 3.7]
movie.map((data)=>{return data.ind})
(2) ['Bollywood', 'Hollywood']

// we have to move three movie
var movie = [
    {
        "name":"Avenger",
        "rating":"4.7",
        "ind":"Hollywood"
    },
    {
        "name":"Rocket",
        "rating":"5.7",
        "ind":"Bollywood"
    },
    {
        "name":"BaT man",
        "rating":"4.7",
        "ind":"Hollywood"
    }
]
// for three movies
 var movie = [
    {
        "name":"Avenger",
        "rating":"4.7",
        "ind":"Hollywood"
    },
    {
        "name":"Rocket",
        "rating":"5.7",
        "ind":"Bollywood"
    },
    {
        "name":"BaT man",
        "rating":"4.7",
        "ind":"Hollywood"
    }
]
undefined
for(i=0;i<movie.length;i++){console.log(movie[i].ind)}
Hollywood
Bollywood
Hollywood
undefined

var movie = {
    "name":"Avenger",
    "rating":"6.7",
    "ind":"Hollywood",
    "price":"127",
    "shift":"3rd"
}
for(key in movie){
    console.log(key)
}

