console.log(data);
		
		function byName() {
			
			document.getElementById("theDiv").innerHTML = "";

			var name = document.getElementById("input").value;
			var newPara = document.createElement('p');
			var otherPara = document.createElement('p');

			for (var i = 0; i < data.members.length; i++) {
				
				if (data.members[i].name === name) {
					var result = document.createTextNode(JSON.stringify(data.members[i]));
				}
					
			}

			if (!result) {

			alert("No such trainer exists... (and if they do, we definitely aren't the ones paying them :) \nTry again.");

			} else {

			otherPara = newPara.appendChild(result);
			document.getElementById("theDiv").appendChild(otherPara);

			}
		}

		
		
		function bySkill() {

			document.getElementById("theDiv").innerHTML = "";

			var skill = document.getElementById("skill").value;
			var newPar = document.createElement('p');
			var otherPar = document.createElement('p');
			

			for (var i = 0; i < data.members.length; i++) {
				for (var j = 0; j < data.members[i].skills.length; j++) {

					if (data.members[i].skills[j] === skill) {

					var res = document.createTextNode(JSON.stringify(data.members[i].name));
					newPar.appendChild(res);

					}
				}
					
			}

			if (!newPar) {

			alert("No Luck \nTry again.");

			} else {

			otherPar = newPar;
			document.getElementById("theDiv").appendChild(otherPar);

			}




		}
		