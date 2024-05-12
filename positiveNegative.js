
function positiveOrNegative(inputValue)
{
    switch (inputValue) 
    {
        case inputValue>0:
            return "The Given number "+inputValue+" is a positive number"

        case inputValue<0:
            return "The Given number "+inputValue+" is a negative number"    
    
        default:
            return "The Given number "+inputValue+" is a neutral number"    
    }

}

let result = positiveOrNegative(-5)
console.log(result);