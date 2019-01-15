//
// Create an array called peopleList objects using Object Literal notation.
//
//     Each 'person' object in the 'people' collection should have the following information:
//
//     First Name Last Name Age Zip Code
//
// Add the following 4 People to your list:
//
//     Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120
// Add code to perform the following:
//
//     Dynamically add the property famousSong to the object instance for Jimi Hendrix and assign it the value Purple Haze
//
// Dynamically add a function called getBandandZip() to the object instance for Jimmy Page
// that returns a concatenated string of
// Led Zeppelin HISZIPCODE (get zip code from the object instance).
// Call the function from your code and log the response.
//
// Write a function that accepts a zip code parameter and prints out all the people in the array with a matching zip code,
// or print the message No match found for zip code! if there is no match




/*
build an ARRAY not a CLASS
double 0s make the code think it's an "octal number"
put people in that array "information given"
adding the object is not that hard simply link to the index of the array to the object then add the value you want to add
adding a function is as easy as adding a value to an object inside the the element
using a for loop instead of a forEach loop for the zipcode comparison
it cannot see what to compare inside the array
pull it out or reach in?
i can build the function inside each individual object
is there a way to build the function outside

 */



var peopleList = [];


peopleList.push({firstName:"Jimmy", lastName:"Page",age:62,zipCode:'00821'},
                {firstName:"Rick",lastName:"Nielsen",age: 57,zipCode: '61016'},
                {firstName:"Jimi",lastName:"Hendrix",age:58,zipCode:'90001'},
                {firstName:"Lemmy",lastName:"Kilmister",age:57,zipCode:'21120'});

// console.log(peopleList);
//
// peopleList[2].famousSong = "Purple Haze";
//
// console.log(peopleList[2]);
//
// peopleList[0].getBandandZip = function()
//                                         {
//                                          console.log(this.band ," , " , this.zipCode);
//                                         };
//
// peopleList[0].band = "Led Zeppelin";
//
// peopleList[0].getBandandZip();

function ReturnPeopleWithCorretZip(zipToCompare)
{
    var number = 1;
    do{

            if (zipToCompare === peopleList[number].zipCode)
            {
                console.log(peopleList[number].firstName ," ", peopleList[number].lastName);
                 var x = true
            }
            else if(number === 5)
                {
                    alert("No matching zip");
                    var x = true;
                }

        number++
    }
    while (x !== true );
}


ReturnPeopleWithCorretZip('21120');