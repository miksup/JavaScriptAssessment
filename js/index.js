
		var j = document.getElementById("jlist");
		var f = document.getElementById("flist");
		//var o = document.getElementsByTagName('a');
		var o = document.getElementById("option");

		function dropJ() {
			if (j.style.display === "none") {
				j.style.display = "block";
				j.style.position = "absolute";
			}
		}

		function foldJ() {
			if (j.style.display === "block") {
				j.style.display = "none";
			} 
		}

		function dropF() {
			if (f.style.display === "none") {
				f.style.display = "block";
				f.style.position = "absolute";
			}
		}

		function foldF() {
			if (f.style.display === "block") {
				f.style.display = "none";
			} 
		}

		function highlight() {
			o.style.backgroundColor = "lightblue";
		}

