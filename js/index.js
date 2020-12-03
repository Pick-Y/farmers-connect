
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


const error_span = document.querySelector('span');
function validate (){


	
	const input = document.querySelector('input');

	let company_name = document.getElementById('company_name').value;
	let trading_as = document.getElementById('trading').value;
	
	let city = document.getElementById('city').value;
	let street = document.getElementById('street').value;
	
	let suburb = document.getElementById('suburb').value;
	let state = document.getElementById('state').value;
	
	let postcode = document.getElementById('postcode').value;
	let phone = document.getElementById('phone').value;
	let mob = document.getElementById('mob-phone').value;
	let password = document.getElementById('password').value;
	let confirm_password = document.getElementById('password-confirmation').value;
	const name_error = document.getElementById("company-name-error");
	

	
	let result = true;
	let error_message = "";


	if(company_name == ""){
		error_message = name_error.innerText = "Company name is required"
		result = false;
		
	} 


	if(error_message){

		input.onkeyup = console.log(input.value);


	}


	return result;
}







function init (){
	const forms = document.getElementById('form');
	forms.onsubmit = validate;


}

window.onload = init;