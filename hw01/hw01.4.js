var M = 1000000000;
var value = Math.round(Math.random() * M);
var successPwd = Math.round(Math.random() * M);
var failPwd = Math.round(Math.random() * M);

var enc = encrypt(value, successPwd);
var successDec = decrypt(enc, successPwd);
var failDec = decrypt(enc, failPwd);

console.log("source: ", value);
console.log("encrypted ", enc);
console.log("success: ", successDec);
console.log("fail: ", failDec);

function encrypt(value, pwd)
{
	var salt = Math.round(Math.random() * M);
	return [(value + salt) * Math.round((pwd ^ salt)), salt];
}

function decrypt(value, pwd)
{
	return value[0] / Math.round((pwd ^ value[1])) - value[1];
}