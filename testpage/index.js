var orientaionData = "";
var motionData = "";

function clickLoginButton()
{
	var id = document.getElementById("login_id").value;
	var passwd = document.getElementById("login_passwd").value;
	var message_area = document.getElementById("message_area");

	var message = (id == passwd && id != "" && passwd != "")? "success" : "fail";
	var color   = (id == passwd && id != "" && passwd != "")? "#007AFF" : "#FF4981";

	message_area.innerHTML = message;
	message_area.style.color = color;
}



/**
 * ページをロードしたときの動作
 */
window.onload = function()
{
}
