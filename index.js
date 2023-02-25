// fetching the element numb not value of numb element by query selector
const value = document.querySelector('#numb');

// making function with arrow function in it no need to write function and function name
// increment is variable having function
const increment = ()=>{

    // getting value of fetched element by .innerText method
     let updatedValue = parseInt(value.innerText); //parsing string value into integer
    updatedValue++;
    //setting the fetched value of element by updatedvalue
    value.innerText=updatedValue;
};

// decrement is variable having function
const decrement = ()=>{

     // getting value of fetched element by .innerText method
    let updatedValue = parseInt(value.innerText); //parsing string value into integer
    updatedValue--;
    //setting the fetched value of element by updatedvalue
    value.innerText=updatedValue;
};