
    
    var A = document.getElementById("num-a").value;
    var B = document.getElementById("num-b").value;
    var choosed=document.getElementsByName("math-obj");
    var result=document.getElementById('result');


    function isNotANumber(inputData) 
    { 
　　　    //isNaN(inputData)不能判断空串或一个空格 
　　     //如果是一个空串或是一个空格，而isNaN是做为数字0进行处理的，而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。 
　　     if (parseFloat(inputData).toString() == "NaN")
        { 
　　　　     //alert(“请输入数字……”); 
　　　　     return false; 
　　     } 
        else 
        { 
　　　     　return true; 
　　     } 
     
      }
    function isNumber()
    {
       
      if(choosed[0].value=="a")
      {
        var flag=isNotANumber(A);
        console.log(typeof(A));
        if(flag=="false")
        {

            result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
            result.innerHTML="为数字";
            console.log("为数字");
        }
      }
      else if(choosed[1].checked)
      {
        var flag=isNotANumber(B);
        if (flag=="false") 
        {
            result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
            result.innerHTML="为数字";
            console.log("为数字");
        }
      }


    
    }


    function isNumber1()
    {
       
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');

      if(choosed[0].value=="a")
      {
        var flag=isNotANumber(A);
        console.log(typeof(A));
        if(flag=="false")
        {

           // result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
            //result.innerHTML="为数字";
            console.log("为数字");
        }
      }
      else if(choosed[1].checked)
      {
        var flag=isNotANumber(B);
        if (flag=="false") 
        {
            //result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
            //result.innerHTML="为数字";
            console.log("为数字");
        }
      }


    
    }

    function is2Number()
    {
        
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        var flagA=isNotANumber(A);
        if(flagA=="false")
        {
           // result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
           // result.innerHTML="为数字";
            console.log("为数字");
        }
      
        var flagB=isNotANumber(B);
        if (flagB=="false") 
        {
           // result.innerHTML="不为数字";
            console.log("不为数字");
        }
        else
        {
           // result.innerHTML="为数字";
            console.log("为数字");
        }
      
    }




    function fixed()

    {
        is2Number();
        A = document.getElementById("num-a").value;
        B = document.getElementById("num-b").value;
      
        var num=parseFloat(A).toFixed(parseInt(B));
        result.innerHTML=num;
    }

    function abs()
    {   

      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        var absNum;
        isNumber1();

      if(choosed[0].checked)
      {
            if(A<0)
            {
                absNum=-A;
            }
            else
            {
                absNum=A;
            }
      }
      else if(choosed[1].checked)
      {
            if(B<0)
            {
                absNum=-B;
            }
            else
            {
                absNum=B;
            }
      }
    
        result.innerHTML=absNum;
    }



    function up()
    {   
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        var updownNum;
        isNumber1();

      if(choosed[0].checked)
      {
        //上舍入
           if(parseInt(parseFloat(A).toFixed(0))<parseFloat(A))
           {//四舍
                updownNum=parseInt(parseFloat(A).toFixed(0))+1;
           }
           else if(parseInt(parseFloat(A).toFixed(0))>parseFloat(A))
           {//五入
                updownNum=parseInt(parseFloat(A).toFixed(0));
           }
           else if (parseInt(parseFloat(A).toFixed(0))==parseFloat(A)) 
           {//整数
                updownNum=A;
           }
      }
      else if(choosed[1].checked)
      {
        if(parseInt(parseFloat(B).toFixed(0))<parseFloat(B))
           {//四舍
                updownNum=parseInt(parseFloat(B).toFixed(0))+1;
           }
           else if(parseInt(parseFloat(B).toFixed(0))>parseFloat(B))
           {//五入
                updownNum=parseInt(parseFloat(B).toFixed(0));
           }
           else if (parseInt(parseFloat(B).toFixed(0))==parseFloat(B)) 
           {//整数
                updownNum=B;
           }
      }
    
        result.innerHTML=updownNum;
    }

    function down()
    {   
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        var updownNum;
        isNumber1();

      if(choosed[0].checked)
      {
        //下舍入
           if(parseInt(parseFloat(A).toFixed(0))>A)
            {//五入
              updownNum=parseInt(parseFloat(A).toFixed(0))-1;
            }
           else if(parseInt(parseFloat(A).toFixed(0))<=A)
           {//四舍
            updownNum=parseInt(parseFloat(A).toFixed(0));
           }

          
      }
      else if(choosed[1].checked)
      {
      
            if(parseInt(parseFloat(B).toFixed(0))>B)
            {//五入
              updownNum=parseInt(parseFloat(B).toFixed(0))-1;
            }
           else if(parseInt(parseFloat(B).toFixed(0))<=B)
           {//四舍
              updownNum=parseInt(parseFloat(B).toFixed(0));
           }
        
      }
    
        result.innerHTML=updownNum;
    }

    function change4and5()
    {
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        var nearNum;
        is2Number();

      if(choosed[0].checked)
      {
       
           
            nearNum=parseInt(parseFloat(A).toFixed(0));
          
      }
      else if(choosed[1].checked)
      {
      
           nearNum=parseInt(parseFloat(B).toFixed(0));
        
      }
    
        result.innerHTML=nearNum;
    }

    function getmax()
    {
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');
        isNumber1();
        var maxNum;
        if(parseFloat(A)>=parseFloat(B))
        {
            maxNum=A;
        }
        else
        {
            maxNum=B;
        }
        result.innerHTML=maxNum;
    }
    

    function getmin()
    {
      A = document.getElementById("num-a").value;
      B = document.getElementById("num-b").value;
      choosed=document.getElementsByName("math-obj");
      result=document.getElementById('result');

        is2Number();
        var minNum;
        if(parseFloat(A)>=parseFloat(B))
        {
            minNum=B;
        }
        else
        {
            minNum=A;
        }
        result.innerHTML=minNum;
    }




