const array=[
    0,1,2,3,4,
    [
        5,6,7,8,9,
        [
            'a', 'b', 'c', 'd', 'e'
        ]
    ]
];
console.log(array.flat(2));

//flat-map
const number=[1,2,3,4,5];
console.log(number.flatMap( v  => [v,v+1,v*2]));