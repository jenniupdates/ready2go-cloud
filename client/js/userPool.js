AWSCognito.config.region = 'ap-southeast-1';

var poolData = {
    UserPoolId: 'ap-southeast-1_NkzVTgL4n',
    ClientId: 'i42s4tlec7n9818tt355jor22'
};
var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

var userData = {
    Username : 'ysimptstuff@gmail.com', 
    Pool : userPool
};