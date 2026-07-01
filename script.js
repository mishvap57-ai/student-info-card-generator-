let btn = document.getElementById("Generatorbtn");
let marksInput = document.getElementById("marks");
let marksvalue = document.getElementById("marksvalue");

//marks value show
marksInput.addEventListener("input",function(){
    marksvalue.innerText = marksInput.value;
});
//getvalue
btn.addEventListener("click",function(){
    let name =document.getElementById("name").value;
    let roll =document.getElementById("roll").value;
    let email =document.getElementById("email").value;
    let age =document.getElementById("age").value;
    //gender
    let gender= document.querySelector('input[name="gender"]:checked')
    gender = gender ? gender.value : "--";
    //course
    let selectedcourse = document.querySelectorAll('input[type="checkbox"]:checked');
    let course = [];
    selectedcourse.forEach((c)=> course.push(c.value));


//marks 
let marks = marksInput.value;

//show card

document.getElementById("cardname").innerText = name || "Student Name";
document.getElementById("cardroll").innerText = roll 
? "Roll No" + roll
 :"Roll No:--";

 document.getElementById("cardemail").innerText = email
? "Email" + email
 :"Email:--";

  document.getElementById("cardage").innerText = age
? "Age" + age
 :"Age:--"; 
 document.getElementById("cardgender").innerText = "gender:" + gender;
 document.getElementById("cardCourse").innerText = course.lenght 
 ? "Course" + course.join (",")
 : "course:--";

 document.getElementById("cardmarks").innerText="marks:"+ marks +  "/100";


//image

const photoinut = document.getElementById("photo");
const cardimage = document.getElementById("cardimage");

if(photoinut.files && photoinut.files[0]){
    const reder = new FileReader();
    reder.onload = function (e){
        cardimage.src = e.target.result;  
      };
      reder.readAsDataURL(photoinut.files[0]);
    }else{
        cardimage.src = "https://plus.unsplash.com/premium_photo-1726754461023-3a40e4fa9cda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3R1ZGVudCUyMGZvcm18ZW58MHx8MHx8fDA%3D"

    }
});




