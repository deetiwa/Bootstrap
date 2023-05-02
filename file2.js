var u_name = document.login.u_name;
var u_pass = document.login.u_pass;

function validate(field)
{
    if(field === 'name_field')
    {
        if(u_name.value)
    {
        
      u_name.classList.remove("is-invalid");
        u_name.classList.add("is-valid");
        document.getElementById("name-validation").innerText = "";
     }
    else
    {
        u_name.classList.remove("is-valid");
        u_name.classList.add("is-invalis");
        document.getElementById("name-validation").innerText = "Username Required";
    }
    }
   else if(field === 'pass_field')
    {
        
    if(u_pass.value)
    {
        
      u_pass.classList.remove("is-invalid");
        u_pass.classList.add("is-valid");
        document.getElementById("pass-validation").innerText = "";
     }
    else
    {
        u_pass.classList.remove("is-valid");
        u_pass.classList.add("is-invalis");
        document.getElementById("pass-validation").innerText = "Password Required";
    }
    }
    
}
