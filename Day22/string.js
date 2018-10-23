

var result=document.getElementById('result');
var A=document.getElementById('str-a');
var B=document.getElementById('str-b');
var choose=document.getElementsByName("str-obj");

function getlength()
{

	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var length;

	if(choosed[0].checked)
      {
        length=A.length;
      }
      else if(choosed[1].checked)
      {
        length=B.length;
      }
      result.innerHTML=length;
}


function getThree()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var letter;

	if(choosed[0].checked)
      {
       	letter=A.charAt(2);
      }
      else if(choosed[1].checked)
      {
        letter=B.charAt(2);
      }
      result.innerHTML=letter;
}

function contactStrings()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var newString;
	newString=A.concat(B);
	result.innerHTML=newString;
}

function indexOfAB()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var index;
	index=A.indexOf(B);
	result.innerHTML=index;
}

function lastIndexAB()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var index;
	index=B.lastIndexOf(A);
	result.innerHTML=index;
}

function sliceString()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");
	numA=document.getElementById('num-a').value;
	numB=document.getElementById('num-b').value;

	var myString;

	if(choosed[0].checked)
      {
        myString=A.slice(parseInt(numA),parseInt(numB));
      }
      else if(choosed[1].checked)
      {
        myString=B.slice(parseInt(numA),parseInt(numB));
      }
      result.innerHTML=myString;
}

function getLine()
{

	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var lines;
	var num;
	if(choosed[0].checked)
      {
       	lines=A.split('\n');
       	num=lines.length;
      }
      else if(choosed[1].checked)
      {
        lines=B.split('\n');
       	num=lines.length;
      }
      result.innerHTML=num;
}



function substrString()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");
	numA=document.getElementById('num-a').value;
	numB=document.getElementById('num-b').value;

	var myString;

	if(choosed[0].checked)
      {
        myString=A.substr(parseInt(numA),parseInt(numB));
      }
      else if(choosed[1].checked)
      {
        myString=B.substr(parseInt(numA),parseInt(numB));
      }
      result.innerHTML=myString;
}


function toUpper()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var myString;

	if(choosed[0].checked)
      {
        myString=A.toUpperCase();
      }
      else if(choosed[1].checked)
      {
        myString=B.toUpperCase();
      }
      result.innerHTML=myString;
}

function toLower()
{
	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");

	var myString;

	if(choosed[0].checked)
      {
        myString=A.toLowerCase();
      }
      else if(choosed[1].checked)
      {
        myString=B.toLowerCase();
      }
      result.innerHTML=myString;
}

function replaceSpace()
{

	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");


	var myString;

	if(choosed[0].checked)
      {
      	//为了全部替换
      	var reg = new RegExp( " " , "g" );
        myString=A.replace(reg,"");
      }
      else if(choosed[1].checked)
      {
        var reg = new RegExp( " " , "g" );
        myString=B.replace(reg,"");
      }
      result.innerHTML=myString;

}

function replaceA()
{

	result=document.getElementById('result');
	A=document.getElementById('str-a').value;
	B=document.getElementById('str-b').value;
	choosed=document.getElementsByName("str-obj");


	var myString;

	if(choosed[0].checked)
      {
      	var reg = new RegExp( "a" , "g" );
        myString=A.replace(reg,B);
      }
      else if(choosed[1].checked)
      {
      	var reg = new RegExp( "a" , "g" );
        myString=B.replace(reg,A);
      }
      result.innerHTML=myString;

}
