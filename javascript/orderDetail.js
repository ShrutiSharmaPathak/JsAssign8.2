// global variables
var tableNo;
var selectedItems=new Array(); //array declaration
var items; 
// function to take order from customer
function takeOrderForCust()
{   
    /*logic to get the list of items customer wants and customer table no */
    if(document.getElementById("tableno").value=="")
        tableNo="Take away"; // If no table no is chosen then food ordered to take away
    else
        tableNo="table no "+document.getElementById("tableno").value; // get the table no

    items=document.getElementsByName('item'); // get the collection of items customer wants
    for(var i=0; i<items.length; i++)
    {
        if(items[i].type=='checkbox' && items[i].checked==true)
        {
            selectedItems[i]=items[i].value; // list of the items customer has chosen
        }
    }
    /* prepreFood function  is called  after taking an order from the customer and subsquently  
    serving the food also thru callback function serveFood*/
    
    prepareFood(tableNo, selectedItems,serveFood); 
    
}
 
//function  for preparing the food
function prepareFood(tNo,chosenItems,callBack)
{
    document.getElementById("prepare").innerText="Preparing food "+chosenItems+" for "+tNo;
    //callback is function passed as a parameter to the prepareFood Function.It can access all prepareFood parameters
    //as well as global parameters.
    callBack(tNo,chosenItems);
}

//function for serving the food
function serveFood(tNo,chosenItems)
{
    document.getElementById("serve").innerHTML="Serving food "+chosenItems+" for  "+tNo;
   
    //code to deselect the options once customer has been served the desired food
    document.getElementById("tableno").value="";
    for(var i=0; i<items.length; i++)
    {
         items[i].checked=false;
         chosenItems[i]="";
    }     
}


