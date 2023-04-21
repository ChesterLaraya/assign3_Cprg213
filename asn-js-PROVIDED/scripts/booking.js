/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
costDay = 40;
numberOfDays = 0;
totalCost = 0;

list = document.getElementsByClassName('flex day-selector');
full = document.getElementById('full');
half = document.getElementById('half');
cost = document.getElementById('calculated-cost');
button = document.getElementById('clear-button');







/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

for (let i = 0; i<list.length; i++) {
    list[i].onClick = function() {
        if(!this.classList.contains('clicked')){
            this.classList.add('clicked');
            this.clss ='clicked';
            numberOfDays ++;
            billtime();

        }
    }
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const calculatedCost = document.getElementById('calculated-cost');
calculatedCost.innerHTML = cost;

