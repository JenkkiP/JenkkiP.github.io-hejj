let row = document.getElementsByClassName("ok");
let i = 0;
let a = ["lightgray"]
let b = 0;
changeColor();

function changeColor()
{
    console.log("hejjjj")
    document.body.style.backgroundColor = a[b];
    b++
}

while(i < row.length)
{
    row[i].addEventListener("click", changeColor);
    i++
}