
/*
Problem : 01
Problem Name: Enter the length in feet below to get the value converted to miles.
Feet to miles using the formula : miles = feet ÷ 5,280
*/
function feetToMile(feet) //function declearation with one parametter(feet).
{
    if(feet < (0)) //check condition.
    {
        return "Input cannot be less than zero"; //return massage.
    }
    else
    {
        return (feet / 5280); //return miles.
    }
}
let miles = feetToMile(50000); //fuction call.
console.log(miles); //output



/*
Problem : 02
Problem Name : Wood Calculator.
*/
function woodCalculator(chairs,tables,beds) //function declearation with three parametter(chairs,tables,beds).
{
    if(chairs <= (0) || tables <= (0) || beds <= (0)) //Check condition.
    {
        return "Input cannot be Zero or less than zero"; //return massage.
    }
    else
    {
        let chairsInch = (chairs * 12);// Chairs 1 feet = 12 inch.
        let tablesInch = (tables * 36); // Tables 3 feet = 36 inch.
        let bedsInch = (beds * 60); //beds 5 feet = 60 inch.
        let totalFeet = (chairsInch + tablesInch + bedsInch)/12; //Inch to Feet convert.
        return totalFeet;//return totalFeet.
    }
}
let resultFeet = woodCalculator(1,2,3);//Function call and parametter value pass.
console.log("Total wood " + resultFeet + "ft");//Output.



/*
Problem : 03
Problem Name : Brick Calculator.
*/
function brickCalculator(building) //function declearation with one parametter(building).
{
    let getFloor = building;
    if(getFloor <= 0) //Condition check
    {
        return "Input cannot be Zero or less than zero"; //return massage.
    }
    else if(getFloor <= 10) //if the input floor less than 10 or equal 10 then every floor height is 15ft.
    {
        let result = getFloor*15;
        return result*1000; // Each ft takes 1000 bricks.
    }
    else if(getFloor >= 11 && getFloor < 21) //if the input floor getter than 11 or equal 11 and less than 21  then every floor height is 12ft.
    {
        let result = (getFloor-10)*12;
        return (result+150)*1000; // Each ft takes 1000 bricks.
    }
    else if(getFloor >= 21) //if the input floor equal 21 or getter than 21 then every floor height is 10ft.
    {
        let result = (getFloor-20)*10;
        return (result+150+120)*1000; // Each ft takes 1000 bricks.
    }
}
let getResult = brickCalculator(20); //Function call and parametter value pass.
console.log("Total bricks pieces = ", + getResult); //Output.



/*
Problem : 04
Problem Name : Tiny Friend Calculator.
*/
function tinyFriend(names)//function declearation with one parametter(names).
{
    var tinyName = names[0];
    for(var i = 0; i < names.length; i++)
    {
        var currentName = names[i];
        var tinyNameLength = tinyName.length; //tinyNameLength calculate.
        var currentNameLength = currentName.length;//currentNameLength calculate.
        if( currentNameLength < tinyNameLength ) //Condition check.
        {
            tinyName = currentNameLength; 
        }
    }
    return tinyName;//return tinyName.
}
var tinyNames = tinyFriend(["kamal","raj","roky"]);//Function call and parametter value pass by using array.
console.log(tinyNames); //Output