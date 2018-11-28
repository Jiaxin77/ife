		function newCheckBox(input,data)
		{

			input.innerHTML="";
			var ul=document.createElement("ul");


		//生成全选checkbox

		var allchoose=document.createElement("input");
		allchoose.setAttribute("type","checkbox");
		allchoose.setAttribute("checkboxType","all");
		allchoose.setAttribute("name","全选"+input.id);
		allchoose.setAttribute("value","全选");
		var AllLi=document.createElement("li");
		AllLi.appendChild(allchoose);
		AllLi.appendChild(document.createTextNode("全选"));

		//生成各个子选项
		for(var i=0;i<data.length;i++)
		{
			var value=data[i].value;
			var name=data[i].text;
			var checkBox=document.createElement("input");
			checkBox.setAttribute("type","checkbox");
			checkBox.setAttribute("id",value);
			checkBox.setAttribute("value",name);
			checkBox.setAttribute("name","singleBox"+input.id);
			checkBox.setAttribute("checkboxType","single");
			var li=document.createElement("li");
			li.appendChild(checkBox);
			li.appendChild(document.createTextNode(name));
			ul.appendChild(li);
		}
		//容器集合
		input.appendChild(AllLi);
		input.appendChild(ul);

		input.addEventListener('click',function(e){

			var el=e.target;
			console.log(el.value);
			if(el.type=="checkbox")
			{

				var myAttr=el.getAttribute("checkboxType");
				console.log(myAttr);
				if(myAttr=="all")
				{
					if(document.getElementsByName('全选'+input.id)[0].checked==true)
					{	
						var boxes=document.getElementsByName('singleBox'+input.id);
						for(var j=0;j<boxes.length;j++)
						{
							boxes[j].checked=true;
						}
					}

				}

				else if(myAttr=="single")
				{
					var boxes=document.getElementsByName('singleBox'+input.id);
					var id=el.id;
					var count=0;
					for(var h=0;h<boxes.length;h++)
					{
						if(boxes[h].checked==true)
						{
							count++;
						}
					}

					if(count==0)
					{
						//不允许一个都不选
						boxes[id-1].checked=true;
					}
					else if (count==boxes.length)
					{
						//全选
						document.getElementsByName('全选'+input.id)[0].checked=true;	
					}
					else if(count!=boxes.length)
					{
						document.getElementsByName('全选'+input.id)[0].checked=false;	
					}
				}
			}




			var tableData=getData(sourceData);
			GetNewTable(tableData);	

		}



		)


	}
