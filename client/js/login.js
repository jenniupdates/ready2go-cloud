// import * as AWS from "@aws-sdk/client-cognito-identity-provider";

const application = {
	init: function () {
		$("#login-form").submit((event) => {
			event.preventDefault()
			console.log("AWS config: " + AWS.AmazonCognitoIdentity.CognitoUserPool);
			this.loginUser()
		})
	},

	loginUser: function () {
		// var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
		// var poolData = {
		// 	UserPoolId: 'ap-southeast-1_NkzVTgL4n',
		// 	ClientId: 'i42s4tlec7n9818tt355jor22'
		// };
		// var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

		// var attributeList = [];

		// var userEmailData = {
		// 	Name : 'email',
		// 	Value : 'ysimptstuff@gmail.com' 
		// };
		// var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(userEmailData);
		// attributeList.push(attributeEmail);

		const email = $("#email-input").val()
    	const password = $("#password-input").val()

		// userPool.signUp(email, password, attributeList, null, function(
		// 	err,
		// 	result
		// ) {
		// 	if (err) {
		// 		alert(err.message || JSON.stringify(err));
		// 		return;
		// 	}
		// 	var cognitoUser = result.user;
		// 	console.log('user name is ' + cognitoUser.getUsername());
		// });
    	// TODO: Add endpoint to handle user login

		alert(`Your email is "${email}" and your password is "${password}", please add an endpoint to handle user login.`)
	},
}

application.init()
