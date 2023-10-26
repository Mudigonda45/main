function emailSend(){

	var userName = document.getElementById('Name').value;
	var phone = document.getElementById('Phone').value;
	var email = document.getElementById('Email').value;
	var message1 = document.getElementById('message1').value;

	var Body = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email +
	"<br/> message1" + message1;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mohansaimudigonda@gmail.com",
    Password : "44E0E940B38A75AEA793E9C09CB82922C646",
    To : 'mohansaimudigonda@gmail.com',
    From : "mohansaimudigonda@gmail.com",
    Subject : "This is the subject",
    Body : Body
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}