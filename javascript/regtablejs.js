function validateTextbox()
{

var box = document.getElementById("name");
var box2= document.getElementById("age");
var box3= document.getElementById("mail");
var box4= document.getElementById("pass");
var rbox= document.getElementById("rpass");

if (box.value =="" || Number(box.value))
{
alert("the  highlighted field cannot be blank");
box.focus();
box.style.border = "solid 2px red";
return false;
}

  
if(Number(box2.value) < 1 || Number(box2.value)>99 )
{
alert("age limit should be 1 to 99");
box2.focus();
box2.style.border = "solid 2px red";
return false;
}

var mailformat = /^\w+@\w+(\.\w{2,3})+$/;
if(!(box3.value.match(mailformat)))
{
  alert("Invalid e-mail");
  box3.focus();
  box3.style.border ="solid 2px red";
  return false;
}

if(box4.value.length < 6 )
{
alert("fill more than 6 character");
box4.focus();
box4.style.border = "solid 2px red";
return false;
}

if(rbox.value==box4.value)
return true;
else
{
  alert("password didn't match");
  rbox.focus();
  rbox.style.border ="solid 2px red";
  return false;
}


}