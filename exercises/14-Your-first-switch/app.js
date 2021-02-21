function getColor(selection)
{
	 var hay = true;

   // console.log(selection);

	switch (selection){
        // Add more options here
        case 'red':
            hay= true;
            console.log(selection);
            break;
        case 'green':
            hay= true;
          
            break;
        case 'blue':
           
            hay= true;
            break;
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;              
    }
    return hay;

}

var colorname = prompt('What color do you want?');
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
