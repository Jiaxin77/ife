

	function getData(allData)
	{

   // dosomething
    //返回数据

    var dataArray=new Array();
    count=0;
    //获取选中的region
    var regions=new Array();
    var idRegion=document.getElementsByName("singleBox"+regionDiv.id);
    console.log(idRegion);

    for(var r=0;r<idRegion.length;r++)
    {
    	if(idRegion[r].checked)
    	{
    		regions.push(idRegion[r].value);
    	}
    }

    console.log(regions);

    //获取选中的product
    var products=new Array();
    var idProduct=document.getElementsByName("singleBox"+productDiv.id);

    for(var p=0;p<idProduct.length;p++)
    {
    	if(idProduct[p].checked)
    	{
    		products.push(idProduct[p].value);
    	}
    }
    console.log(products);



    //获取数据

    for(var a=0;a<allData.length;a++)
    {

    	var thisRegion=allData[a].region;
    	var thisProduct=allData[a].product;

    	if(products.length<=regions.length)
    	{	


    		for (var i=0;i<products.length;i++)
    		{
   		 		//区域符合
   		 		if(thisProduct==products[i])
   		 		{
   		 			for(var j=0;j<regions.length;j++)
   		 			{
   		 				if(thisRegion==regions[j])
   		 				{

    						//dataArray.push(allData[a]);

    						
    						dataArray[count]=new Array();
								//哪个少哪个放前面
								
								dataArray[count][0]=allData[a].product;
								dataArray[count][1]=allData[a].region;

								dataArray[count][2]=allData[a].sale;

								count++;

							}
						}
					}
				}
			}

			else if(products.length>regions.length)
			{


				for (var i=0;i<regions.length;i++)
				{
   		 		//区域符合
   		 		if(thisRegion==regions[i])
   		 		{
   		 			for(var j=0;j<products.length;j++)
   		 			{
   		 				if(thisProduct==products[j])
   		 				{
	//dataArray.push(allData[a]);


	dataArray[count]=new Array();
								//哪个少哪个放前面
								

								dataArray[count][1]=allData[a].product;
								dataArray[count][0]=allData[a].region;

								dataArray[count][2]=allData[a].sale;

								count++;

							}
						}
					}
				}
			}

		}

	//	console.log(dataArray.length);
  //  console.log(count);
  return dataArray;

}


function GetNewTable(data)
 {


	document.getElementById("table-wrapper").innerHTML='';


	var index=document.getElementById("table-wrapper").rows.length;
	var insertRow=document.getElementById("table-wrapper").insertRow(index);

	var col1,col2,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12;

	
	//var rowFlag=[]
	var reloadTable=new Array();
	var haveRow=new Array();

	for(var i=0;i<data.length;i++)
	{
		var flag=0;
		var count=0;
		for(var inR=0;inR<haveRow.length;inR++)
		{

			if(i==haveRow[inR])
			{
				flag=1;
			}
		}
		if(flag==0)
		{
			var thiscell=data[i][0];
			for(var j=i+1;j<data.length;j++)
			{
				if(thiscell==data[j][0])
				{
				haveRow.push(j);
    			//统计有几行一样的
    			//把一样的放在新表中
    			reloadTable[count]=new Array();
    			reloadTable[count]=data[j];
    			count++;
    			}
    		}

    	if(count!=0)
    	{
    		index=document.getElementById("table-wrapper").rows.length;
    		insertRow=document.getElementById("table-wrapper").insertRow(index);
    		//插入当前行
    		col1=insertRow.insertCell(0);//插到此行第0列
    		col2=insertRow.insertCell(1);
    		m1=insertRow.insertCell(2);
    		m2=insertRow.insertCell(3);
    		m3=insertRow.insertCell(4);
    		m4=insertRow.insertCell(5);
    		m5=insertRow.insertCell(6);
    		m6=insertRow.insertCell(7);
    		m7=insertRow.insertCell(8);
    		m8=insertRow.insertCell(9);
    		m9=insertRow.insertCell(10);
    		m10=insertRow.insertCell(11);
    		m11=insertRow.insertCell(12);
    		m12=insertRow.insertCell(13);

    		//col1.rowspan=count;
    		col1.setAttribute("rowspan",count+1);
    		col1.innerHTML=data[i][0];
    		col2.innerHTML=data[i][1];

    		m1.innerHTML=data[i][2][0];
    		m2.innerHTML=data[i][2][1];
    		m3.innerHTML=data[i][2][2];
    		m4.innerHTML=data[i][2][3];
    		m5.innerHTML=data[i][2][4];
    		m6.innerHTML=data[i][2][5];
    		m7.innerHTML=data[i][2][6];
    		m8.innerHTML=data[i][2][7];
    		m9.innerHTML=data[i][2][8];
    		m10.innerHTML=data[i][2][9];
    		m11.innerHTML=data[i][2][10];
    		m12.innerHTML=data[i][2][11];


    		for(var reload=0;reload<reloadTable.length;reload++)
    		{

    		index=document.getElementById("table-wrapper").rows.length;
			insertRow=document.getElementById("table-wrapper").insertRow(index);
			console.log(index);
			//col1=insertRow.insertCell(0);//插到此行第0列
			col2=insertRow.insertCell(0);
			m1=insertRow.insertCell(1);
			m2=insertRow.insertCell(2);
			m3=insertRow.insertCell(3);
			m4=insertRow.insertCell(4);
			m5=insertRow.insertCell(5);
			m6=insertRow.insertCell(6);
			m7=insertRow.insertCell(7);
			m8=insertRow.insertCell(8);
			m9=insertRow.insertCell(9);
			m10=insertRow.insertCell(10);
			m11=insertRow.insertCell(11);
			m12=insertRow.insertCell(12);

    		//col1.rowspan=count;

    		//col1.innerHTML=data[i][0];
    		col2.innerHTML=reloadTable[reload][1];

    		m1.innerHTML=reloadTable[reload][2][0];
    		m2.innerHTML=reloadTable[reload][2][1];
    		m3.innerHTML=reloadTable[reload][2][2];
    		m4.innerHTML=reloadTable[reload][2][3];
    		m5.innerHTML=reloadTable[reload][2][4];
    		m6.innerHTML=reloadTable[reload][2][5];
    		m7.innerHTML=reloadTable[reload][2][6];
    		m8.innerHTML=reloadTable[reload][2][7];
    		m9.innerHTML=reloadTable[reload][2][8];
    		m10.innerHTML=reloadTable[reload][2][9];
    		m11.innerHTML=reloadTable[reload][2][10];
    		m12.innerHTML=reloadTable[reload][2][11];
    		}
    		//break;
   		}

   		else
   		{
   			console.log("else!");

   		index=document.getElementById("table-wrapper").rows.length;
    	insertRow=document.getElementById("table-wrapper").insertRow(index);


    	col1=insertRow.insertCell(0);//插到此行第0列
    	col2=insertRow.insertCell(1);
    	m1=insertRow.insertCell(2);
    	m2=insertRow.insertCell(3);
    	m3=insertRow.insertCell(4);
    	m4=insertRow.insertCell(5);
    	m5=insertRow.insertCell(6);
    	m6=insertRow.insertCell(7);
    	m7=insertRow.insertCell(8);
    	m8=insertRow.insertCell(9);
    	m9=insertRow.insertCell(10);
    	m10=insertRow.insertCell(11);
    	m11=insertRow.insertCell(12);
    	m12=insertRow.insertCell(13);



    	col1.innerHTML=data[i][0];
    	col2.innerHTML=data[i][1];
    	
    	m1.innerHTML=data[i][2][0];
    	m2.innerHTML=data[i][2][1];
    	m3.innerHTML=data[i][2][2];
    	m4.innerHTML=data[i][2][3];
    	m5.innerHTML=data[i][2][4];
    	m6.innerHTML=data[i][2][5];
    	m7.innerHTML=data[i][2][6];
    	m8.innerHTML=data[i][2][7];
    	m9.innerHTML=data[i][2][8];
    	m10.innerHTML=data[i][2][9];
    	m11.innerHTML=data[i][2][10];
    	m12.innerHTML=data[i][2][11];

    	
		}

   		 }
	}


}
