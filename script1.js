var joespubnubinstance = PUBNUB.init({
         publish_key   : 'pub-c-f5eb2b26-7b2b-41ec-bc26-313b3dabc2e9',
         subscribe_key : 'sub-c-de69f916-c1b5-11e3-90c5-02ee2ddab7fe'
     })
 
     joespubnubinstance.subscribe({
         channel : "joesCalculator",
         message : function(PUBNUB_MESSAGE_OBJECT){ 
       		
       		var input_element_1 = document.getElementById('first_number'); // making references from HTML to JS
       		var input_element_2 = document.getElementById('second_number');
       		var result_element = document.getElementById('first_number_plus_second_number');

       		input_element_1.value = PUBNUB_MESSAGE_OBJECT.number1; // assigning the message property number1 to our element's property value
       		input_element_2.value = PUBNUB_MESSAGE_OBJECT.number2; // taking the number someone typed in on the browser, publishes it over PN, and puts into its correct box

       		
       		result_element.innerHTML = parseInt(input_element_1.value) + parseInt(input_element_2.value) //turn our values from strings into integers, add them together, then finally, assign the sum to the property innerHTML of the span (result element)
         }
     })
 

var sendNumbers = function() {
	var first_number = document.getElementById('first_number'); // assign references for elements in the HTML to variables
	var second_number = document.getElementById('second_number');

	joespubnubinstance.publish({ // curly brace is an object, "channel" is a property assigned to the object
             channel : "joesCalculator",
             message : { //we can send a string, object or number in a property, but in this case, we're going to send a object
             	number1 : parseInt(first_number.value),
             	number2 : parseInt(second_number.value) // we just want to send our message here, but all the action happens on the subscribe side
             }
         })
};

var calcFahren2 = function(number) {
  var val = number * 1.8 + 32;
  var resultBox = document.getElementById('result'); 
  resultBox.innerHTML = val; 
};
