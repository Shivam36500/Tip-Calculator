function Calculate()
{
    var amt=document.getElementById("amount").value;
    var rating=document.getElementById("rating").value;
    var ppl=document.getElementById("people").value;
    var res=(amt*rating)/ppl;
    document.getElementById("tip").innerHTML="TIP AMOUNT IS "+"Rs: " +res+" each";
    document.getElementById("btn").style.backgroundColor="yellow";
}