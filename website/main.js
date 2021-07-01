// ------------------------ STICKY NAVIGATION BAR ------------------------ 

window.addEventListener('scroll', function()
{
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

 // ------------------------ RESPONSIVE STICKY NAVIGATION BAR  ------------------------ 

function toggleMenu()
{
	const menuToggle=document.querySelector('.menuToggle');
	const navigation=document.querySelector('.navigation');
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
}
 // ------------------------ RESPONSIVE VALIDATION ORDER FORM ------------------------ 

function validate()
{
	var name = f1.txtName.value;
	if(name == "")
	{
		alert("Please enter your name !!");
		f1.txtName.focus();
		return false;
	}
	var email = f1.txtEmail.value
	if(email == "")
	{
		alert("Please enter the email !!");
		f1.txtEmail.focus();
		return false;
	}
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	if(atpos < 1 || (dotpos - atpos < 2))
	{
		alert("Please enter the valid email !!");
		f1.txtEmail.focus();
		return false;
	}
	var phone = f1.txtPhone.value;
	if(phone == "" || isNaN(phone) || phone.length != 10)
	{
		alert("Please enter the valid phone number !!");
		f1.txtPhone.focus();
		return false;
	}
	var message=f1.txtMessage.value;
	if(message == "")
	{
		alert("Please leave a message.");
		f1.txtMessage.focus();
		return false;
	}
	return true;
}
 // ------------------------ DARK/LIGHT MODE SECTION ------------------------ 

function myFunction()
{
	var element = document.body;
	element.classList.toggle("dark-mode");
}



