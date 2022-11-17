import { poolData, userPool, userData } from "./userPool";

const application = {
	init: function () {
		$("#login-form").submit((event) => {
			event.preventDefault()
			this.loginUser()
		})
	},

	loginUser: function () {
		const email = $("#email-input").val()
    	const password = $("#password-input").val()
		userPool.signUp(email, password, [], null, (err, data) => {
			if (err) {
				console.log(err);
			} 
			console.log(data);
		});
    	// TODO: Add endpoint to handle user login

    // alert(`Your email is "${email}" and your password is "${password}", please add an endpoint to handle user login.`)
	},
}

application.init()
