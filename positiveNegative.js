
function positiveOrNegative(inputValue)
{
    if (inputValue>0) {
        console.log("The given number "+inputValue+" is a postive number"); 
    }
    else if (inputValue<0)
    {
        console.log("The given number "+inputValue+" is a nagative number"); 
    }
    else if(inputValue==0)
    {
        console.log("The given number "+inputValue+" is a neutral number");
    }

}

positiveOrNegative(0)
