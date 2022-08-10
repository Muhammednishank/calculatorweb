var operator;
var a;
var b;


function bclick(val){
    document.getElementById("label").value=document.getElementById("label").value+val;

}
function clr()
{
    document.getElementById("label").value="";
}
function plusclick()
{
    a=document.getElementById("label").value;
    document.getElementById("label").value="";
    operator=1;

}
function subclick()
{
    a=document.getElementById("label").value;
    document.getElementById("label").value="";
    operator=2;

}
function multiclick()
{
    a=document.getElementById("label").value;
    document.getElementById("label").value="";
    operator=3;

}
function divclick()
{
    a=document.getElementById("label").value;
    document.getElementById("label").value="";
    operator=4;

}


function equalclick()
{
    b=document.getElementById("label").value;
    switch(operator)
    {
        case 1:
            {
        
            result=a+b;
            document.getElementById("label").value=result;
            break;
        
    }
    
        case 2:
        
        {
            result=a-b;
            document.getElementById("label").value=result;
            break;
        } 
        case 3:
       
        {
            result=a*b;
            document.getElementById("label").value=result;
            break;
        } 
        case 4:
        {
            result=a/b;
            document.getElementById("label").value=result;
            break;
        }

         
    }
    
   
   
}