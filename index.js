let passGenerator1 = document.getElementById("passwordOne");
let passGenerator2 = document.getElementById("passwordTwo");


		function generatePassword() {
			let pass = '';
			let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
					'abcdefghijklmnopqrstuvwxyz0123456789@#$';
			
			for (let i = 1; i <= 12; i++) {
				let char = Math.floor(Math.random()
							* str.length + 1);
				
				pass += str.charAt(char);
			}
			
			return pass;
		}

		function randomPassword() {
			passGenerator1.textContent = generatePassword();
      passGenerator2.textContent = generatePassword();
		}

