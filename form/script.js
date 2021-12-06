
const name = document.getElementById("name");
const age = document.getElementById("age");

function checkSam() {
    if (name == "sam" && age >= 18) {
        console.log('hello')
        document.getElementById("message").innerHTML = "Go away Sam";
    } else {
        document.getElementById("message").innerHTML = "hello not sam";
    }
}