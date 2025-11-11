const todolist = [{
     name:'wash cloths',
     duedate:'2022-12-22',
},{name:'make dinner',
duedate:'2022-12-22'}];
rendor();

function rendor(){
     let todolistHTML='';
for(let i=0 ; i<todolist.length; i++){
     const todoobject =todolist[i];
     const name=todoobject.name;
     const duedate=todoobject.duedate;
     const html=`
     <p>${name}${duedate}
     <button onclick="
     todolist.splice(${i},1);    
     rendor(); 
     ">Delete</button>
      </p>`;
     todolistHTML+=html;

     
}
//console.log(todolistHTML);
document.querySelector(".jstodolist").innerHTML=todolistHTML
}
          function addtodo(){        
        const inputele=document.querySelector(".todoinput");
           const name= inputele.value;
           const dateinput= document.querySelector(".jsdate");
           const duedate=dateinput.value;
    todolist.push({
     name ,duedate
    });
   //console.log(todolist);
   inputele.value='';
   rendor();
}
