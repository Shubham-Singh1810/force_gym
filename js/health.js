function BMI(){
    var h=document.getElementById("h").value;
    var w=document.getElementById("w").value;
    bmi = w/(h*h/10000)
    var bmio =(bmi.toFixed(2));
    document.getElementById("result").innerHTML= "your BMI is "+bmio;
}
function BMR() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let age = document.getElementById("age").value;
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    if (male.checked == true) {
        bmr = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)
        document.getElementById("bmrmessage").innerHTML = "Your BMR is "+bmr;
    }
    else if (female.checked == true) {
        bmr = 655 + (9.563 * weight) + (1.850 * height) - (4.676 * age)
        document.getElementById("bmrmessage").innerHTML = "Your BMR is "+bmr;
    }
    else{
        alert("enter your gender")
    }
    if(age<=15||age>=80){
        alert("Your age should in the range of 15-80 years")
    }
}