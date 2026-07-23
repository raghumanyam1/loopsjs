function2();

function function1() {
    let x =1;
    console.log(x);

}

function function2() {
    let x = 2;
    console.log(x);
}



let a = "Global";

function outer() {
    let b = "Outer";

    function inner() {
        let c = "Inner";  
        console.log(a);             // Global
        console.log(b);            // Outer
        console.log(c);            // Inner
    }

    inner();
}

outer();