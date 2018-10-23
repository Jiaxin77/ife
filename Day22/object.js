var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {
    
    function findId(obj)
    {

        if(obj.name==name)
        {
            console.log(obj.id);
        }

        if(obj.left!=null)
        {
            findId(obj.left);
        }
        if(obj.right!=null)
        {
            findId(obj.right);
        }
    }

    findId(tree);
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {

        function findName(obj)
    {

        if(obj.id==id)
        {
            console.log(obj.name);
        }

        if(obj.left!=null)
        {
            findName(obj.left);
        }
        if(obj.right!=null)
        {
            findName(obj.right);
        }
    }

    findName(tree);

}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {

    function getName(obj)
    { 
        console.log(obj.name);
        if(obj.left!=null)
        {
            getName(obj.left);
        }
        if (obj.right!=null)
        {
            getName(obj.right);
        }
        
        
    }

    getName(tree);

}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
     function getName(obj)
    {
        
        if(obj.left!=null)
        {
            getName(obj.left);
        }
        console.log(obj.name);
        if (obj.right!=null)
        {
            getName(obj.right);
        }
        
        
    }

    getName(tree);
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {

         function getName(obj)
    {
        
        if(obj.left!=null)
        {
            getName(obj.left);
        }
        
        if (obj.right!=null)
        {
            getName(obj.right);
        }
        console.log(obj.name);
        
       
    }

    getName(tree);
}

window.onload=function()
{ 
    console.log("find Lee")
    findIdByName("Lee");
    console.log("find 9");
    findNameById(9);
    console.log("------DLR------");
    getListWithDLR();
    console.log("------LDR------");
    getListWithLDR();
    console.log("------LRD------");
    getListWithLRD();


}

