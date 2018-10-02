function showHobby()
{
	document.getElementById("myhobby").innerHTML="我爱代码，代码爱我。"
}

function hello()
{
	var name=document.getElementById("name").value;
	alert("hello "+name);
}

window.onload = function(){
	sayHelloTime();
}

function sayHelloTime(){
	var myDate = new Date();
	
	var hours = myDate.getHours();
	console.log(hours);
	if(hours>=4 && hours<=9)
	{
		alert("早上好！");
	}
	else if (hours>=10 && hours<=11)
	{
		alert("上午好！");
	}
	else if(hours>11 && hours<=13)
	{
		alert("中午好！");
	}
	else if(hours>13 && hours<=20)
	{
		alert("下午好！");
	}
	else if(hours>20 && hours<=23)
	{
		alert("晚上好！");
	}
	else{
		alert("晚上好！");
	}
}