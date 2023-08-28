let num = prompt("digite um número: ");

num = parseFloat(num);

if (num < 0)
{
    console.log("Negativo");
}
else if (num == 0)
{
    console.log("Zero");
}
else (num > 0)
{
    console.log("Positivo");
}
