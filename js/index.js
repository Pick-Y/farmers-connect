
/*
function message (){

	let nt = document.getElementById('AU-NT');
	let wa = document.getElementById('AU-WA');
	let act = document.getElementById('AU-ACT');
	let nsw = document.getElementById('AU-NSW');
	let sa = document.getElementById('AU-SA');
	let vic = document.getElementById('AU-VIC');
	let qld = document.getElementById('AU-QLD');
	let tas = document.getElementById('AU-TAS');
	

	console.log(nt);
	// makes  NT darker on mouse over
	nt.onmouseover = () =>{
		nt.setAttribute('style', 'fill:#f3a744')
	}
	nt.onmouseout = () =>{
		nt.setAttribute('style', 'fill:#f5b461')
	}

	// makes  WA darker on mouse over
	wa.onmouseover = () =>{
		wa.setAttribute('style', 'fill:#e9392f')
	}
	wa.onmouseout = () =>{
		wa.setAttribute('style', 'fill:#ec524b')
	}

	// makes  ACT darker on mouse over
	act.onmouseover = () =>{
		act.setAttribute('style', 'fill:#792f40')
	}
	act.onmouseout = () =>{
		act.setAttribute('style', 'fill:#8f384d')
	}

	// makes  NSW darker on mouse over
	nsw.onmouseover = () =>{
		nsw.setAttribute('style', 'fill:#7fc7aa')
	}
	nsw.onmouseout = () =>{
		nsw.setAttribute('style', 'fill:#9ad3bc')
	}

	// makes SA darker on mouse over
	sa.onmouseover = () =>{
		sa.setAttribute('style', 'fill:#975a49')
	}
	sa.onmouseout = () =>{
		sa.setAttribute('style', 'fill:#af6b58')
	}

	// makes VIC  darker on mouse over
	vic.onmouseover = () =>{
		vic.setAttribute('style', 'fill:#475044')
	}
	vic.onmouseout = () =>{
		vic.setAttribute('style', 'fill:#556052')
	}

	// makes  QLD darker on mouse over
	qld.onmouseover = () =>{
		qld.setAttribute('style', 'fill:#eee2aa')
	}
	qld.onmouseout = () =>{
		qld.setAttribute('style', 'fill:#f3eac2')
	}

	// makes  TAS darker on mouse over
	tas.onmouseover = () =>{
		tas.setAttribute('style', 'fill:#294e56')
	}
	tas.onmouseout = () =>{
		tas.setAttribute('style', 'fill:#34626c')
	}

}
 message();
*/

/*
 const name = document.getElementById('company_name');
 const form = document.getElementById('form');


 //passing the event "e". Preventdefault(stops the button from submitting unless the values have been correctly inserted)
 form.addEventListener('submit', (e) => {

	let result = true;
	
	if(name.value == " ") {
		document.getElementById('company-name-error').innerText = "ciaone";
	}

	e.preventDefault()
 })
 */









function validate (){


	

	//This are all the inputs n the registration-form.
	let company_name = document.getElementById('company_name').value;
	let trading_as = document.getElementById('trading').value;
	let city = document.getElementById('city').value;
	let street = document.getElementById('street').value;
	let suburb = document.getElementById('suburb').value;
	let state = document.getElementById('state').value;
	let postcode = document.getElementById('postcode').value;
	let email = document.getElementById('email').value;
	let phone = document.getElementById('phone').value;
	let mob = document.getElementById('mob-phone').value;
	let password = document.getElementById('password').value;
	let confirm_password = document.getElementById('password-confirmation').value;
	let agree = document.getElementById('agreed').checked;
	
	
	//this list targets all the error spans.
	const name_error1= document.getElementById("company-name-error-1");
	const trading_error = document.getElementById("trading-error");
	const city_error = document.getElementById("city-error");
	const street_error = document.getElementById("street-error");
	const suburb_error = document.getElementById("suburb-error");
	const state_error = document.getElementById("state-error");
	const postcode_error = document.getElementById("postcode-error");
	const email_error = document.getElementById("email-error");
	const phone_error = document.getElementById("phone-error");
	const mob_phone_error = document.getElementById("mob-phone-error");
	const password_error = document.getElementById("password-error");
	const confirm_password_error = document.getElementById("confirm-password-error");
	const agree_error = document.getElementById("agree-error");

	let result = true;
	let error_message = "";


	//checks Company Name
	if(company_name == ""){
		error_message = name_error1.innerText = "Company name is required"
		result = false;
	}else if(!company_name.match(/[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/)){
		
		error_message = name_error1.innerText = "Can only contain apha characters or hyphens";
		result = false;
	}

	//checks Trading As
	if(trading_as == ""){
		error_message = trading_error.innerText = "A trading name is required";
		result = false;
	}else if(!trading_as.match(/[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/)){
		error_message = trading_error.innerText = "Can only contain apha characters or hyphens";
	}

	//checks City
	if(city == ""){
		error_message = city_error.innerText = "City is required";
		result = false;
	}else if(!city.match(/[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/)){
		error_message = city_error.innerText = "Can only contain apha characters or hyphens";
	}

	//checks street
	if(street == ""){
		error_message = street_error.innerText = "Street is required";
		result = false;
	}else if(!trading_as.match(/[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/)){
		error_message = street_error.innerText = "Can only contain apha characters or hyphens";
		
	}
	
	//checks suburb
	if(suburb == ""){
		error_message = suburb_error.innerText = "Suburb is required";
		result = false;
	}else if(!suburb.match(/[a-zA-Z]+(?:(?:\. |[' ])[a-zA-Z]+)*/)){
		error_message = suburb_error.innerText = "Can only contain apha characters or hyphens";
		
	}

	//checks state
	if(state == ""){
		error_message = state_error.innerText = "State is required";
		result = false;
	}

	//checks postcode
	if(postcode == ""){
		error_message = postcode_error.innerText = "Postcode is required";
		result = false;
	}else if(!postcode.match(/^[0-9]{4}$/)){
		error_message = postcode_error.innerText = "Can only contain 4 numbers";
	}else{
		error_message = postcode_error.innerText = postCode(state,postcode);
	}

	//checks email
	if(email == ""){
		error_message = email_error.innerText = "Email is required";
		result = false;
	}else if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
		error_message = email_error.innerText = "Pleae insert a valid email address";
	}

	
	//Checks phone
	if(phone ==""){
		error_message = phone_error.innerText = "Please insert your phone";
		}else if(!phone.match(/^[0-9]{8,12}$/)){
			error_message = phone_error.innerText = "Please insert a valid number";
		}
	
	//Checks phone
	if(phone ==""){
		error_message = phone_error.innerText = "Please insert your phone";
		result = false;
		}else if(!phone.match(/^[0-9]{8,12}$/)){
			error_message = phone_error.innerText = "Please insert a valid number";
		}
		//Checks mobile phone
	if(mob ==""){
		error_message = mob_phone_error.innerText = "Please insert your phone";
		result = false;
		}

	//Checks password
	if(password ==""){
		error_message = password_error.innerText = "Please choose a password";
		result = false;
		}else if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
			error_message = password_error.innerText = "Must contain 6 to 20 characters. At least one numeric digit. One uppercase One lowercase letter";
		}
		
	//checks confirm password

	if(confirm_password !== password){
		error_message = confirm_password_error.innerText = "Password does not match. Try again";
		result = false;
	}


	if(!agree){
		error_message = agree_error.innerText = "You must agreeo Term of Use";
		result = false;
	}
	return result;
}




function postCode(state,postcode){
 
	alert(state )
	alert(postcode)
	errMsg = "";


	

	switch(state) {


		//Case statement starts with capital letter

		case "VIC":
		
		
			if (!postcode.match(/^(3|8)/)) {
				errMsg += "\n VIC postcode must start with a 3 or a 8!";
			}

			break;
		case "NSW":
			if (!postcode.match(/^(1|2)/)){
				errMsg += "\nNSW postcode must start with a 1 or a 2!";
			}
		break;
		case "QLD":
			if (!postcode.match(/^(4|9)/)) {
				errMsg += "\nQLD postcode must start with a 4 or a 9!";
			}
		break;
		case "NT":
			if (!postcode.match(/^(0)/)) {
				errMsg += "\nNT postcode must start with a 0!";
			}
		break;
		case "WA":
			alert('cazzo')
			if (!postcode.match(/^(6)/)) {
				errMsg += "\nWA postcode must start with a 6!";
			}
		break;
		case "SA":
			if (!postcode.match(/^(5)/)) {
				errMsg += "\nSA postcode must start with a 5!";
			}
			break;
			case "TAS":
			if (!postcode.match(/^(7)/)) {
				errMsg += "\nTAS postcode must start with a 7!";
			}
			break;
			case "ACT":
			if (!postcode.match(/^(0)/)) {
				errMsg += "\nACT postcode must start with a 0";
			}
			break;
			default:
			errMsg += "must be an Australian postcode";
	}

	
	

	return errMsg;

}




function init (){
	const forms = document.getElementById('form');
	forms.onsubmit = validate;


}

window.onload = init;