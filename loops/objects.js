
let rajuu = {
    name: "raju",
    tech: "c",
    work_exp: 5,
} 
console.log(rajuu['work_exp']);


let input = 'name'

let raghu = {
    name: "raju",
    tech: "js",
    'work exp': 4
} 
console.log(raghu.input);


let alien ={
    name: 'rajesh',
    tech: 'js',
    laptop: {
        cpu: 'i5',
        ram: 4,
        brand: 'asus'

    }
}

//console.log(alien.laptop.brand.length);


console.log(alien.laptop?.brand?.length);


let code = {
    name : 'rajesh',
    tech : 'java',
    age : '33',

    pc : {
        cpu : 'i7',
        ram : 4,
        brand: 'hp',
    }
}

delete code.age

console.log(code);


//object methods
//Methods are functions stored as object properties

let laptop = {
    cpu:'i9',
    ram: 8,
    brand: 'hp',

    greet:function(){
        console.log('hello world');
    }
}

laptop.greet();

//this

let laptop1 = {
    cpu:'i9',
    ram: 8,
    brand: 'hp',

    getconfig:function(){
        console.log(this.cpu);
    }
}

laptop1.getconfig();










