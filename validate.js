
document.getElementById("registrationForm").addEventListener("submit",validate)

function get_all_users(){
    return axios.get('https://dry-dawn-85361.herokuapp.com/register').then((res)=>{
        
        return res.data
    })
}

function alertFunc() {
    
  }

function validate(e){
    document.getElementById("Register").style.display="none"
    document.getElementById("Sub").style.display="block"
    e.preventDefault()
    console.log("hi")
    var flag = true
    var name = document.getElementById("name").value
    var regno = toUpperCase(document.getElementById("regno").value)
    var email = document.getElementById("email").value
    var pass = document.getElementById("pass").value
    var pno = document.getElementById("pno").value
    var ele = document.getElementsByName('gender'); 
    var gen        
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
            gen=ele[i].value
    } 
    var domains = document.getElementsByName('domains');
    var finalDomains=[]
    var i;
    for (i = 0; i < domains.length; i++) {
        if (domains[i].checked) {
            finalDomains.push(domains[i].value)
        }
    }

    if(finalDomains.length===0){
        alert("Please Choose Your Domain Of Interest")
        document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
        flag = false
    }

    if (!(/^(18|19)[A-Z]{3}[0-9]{4}$/.test(regno))){
        console.log(regno)
        alert("Please Enter Valid Registartion Number")
        document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
        flag = false
    }
    if(!(/@vitstudent.ac.in$/.test(email))){
        alert("Enter Valid VIT Mail Id")
        flag = false
        document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
    }
    if(!(/^[0-9]{10}$/.test(pno))){
        alert("Enter Valid Phone Number")
        flag = false
        document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
    }

    get_all_users().then((doc)=>{
        let userc = doc
     
        userc.forEach((valse,ind)=>{
            if (valse.regno == regno){
                flag=false
                alert("You Have Already Registered With This Registartion Number")
                document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
            }
            else if (valse.email == email){
                flag=false
                alert("You Have Already Registered With This Email ID")
                document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
            }
        })
        setTimeout(alertFunc, 1000);
        if(flag== true){
            let new_user = {name:name,regno:regno,email: email,pno:Number(pno), password:pass,gender:gen,type:finalDomains}
      
            axios.post('https://dry-dawn-85361.herokuapp.com/register',JSON.stringify(new_user),{
                headers:{
                    'Content-type':'application/json'
                }
            }).then((doc)=>{
                    alert("YOU HAVE REGISTERED SUCCESSFULLY!!!")
                    document.getElementById("name").value= ""
                    document.getElementById("regno").value= ""
                    document.getElementById("email").value= ""
                    document.getElementById("pass").value= ""
                    document.getElementById("pno").value= ""
                    document.getElementById("Register").style.display="block"
                    document.getElementById("Sub").style.display="none"
            })
        } 
    
    })

    
}



