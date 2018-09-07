
	
		var numbers = "0123456789*!&^%$£()~,#;<>?";

		var specials = "*!&^%$£()~#;<>?";


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


		function nameCheck() {
			var check = true;
			for (var i = 0; i <= document.getElementById("name").value.length; i++) {
				for (var j = 0; j <= numbers.length; j++){
					if (document.getElementById("name").value.charAt(i) == numbers.charAt(j)) {
						check = false;
					} else {
						check = true;
					}
				}
			}

			if (check == false) {
				document.getElementById("nameDiv").innerHTML = "invalid name!";
			}
			
			return check;
		}




		function dobCheck() {
			var check = true;
			if ((document.getElementById("DOB").value.charAt(2) === "/") && (document.getElementById("DOB").value.charAt(5) === "/")) {
				check = true;
			} else {
				check = false;
			}

			if(parseInt(document.getElementById("DOB").value.substring(0,1)) <= 31) {
				check = true;
			} else {
				check = false;
			}

			if (check == false) {
				document.getElementById("dobDiv").innerHTML = "invalid DOB!";
			}
			
			return check;
		}



		function addCheck() {
			var check = true;
			for (var i = 0; i <= document.getElementById("Address").value.length; i++) {
				for (var j = 0; j <= numbers.length; j++){
					if (document.getElementById("Address").value[i] === specials[j]) {
						check = false;
					}
				}
			}

			if (check == false) {
				document.getElementById("addDiv").innerHTML = "invalid Addess!";
			}
			
			return check;
		}

		
		
		function poCheck() {

		}

		function emailCheck() {

		}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		function verify() {
			
			if ((nameCheck()) && (dobCheck()) && (addCheck()) && (poCheck()) && (emailCheck())) {

			submit()	
		
			}
		}




		function submit() {
			
			localStorage.setItem("name",document.getElementById("name").value);
			localStorage.setItem("DOB",document.getElementById("DOB").value);
			localStorage.setItem("address",document.getElementById("Address").value);
			localStorage.setItem("postcode",document.getElementById("Postcode").value);
			localStorage.setItem("email",document.getElementById("Email").value);

		}