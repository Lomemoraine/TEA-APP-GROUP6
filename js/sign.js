$("#btnSignIn").click(function(){
    let username= $("#userName").val();
    let password= $("#password").val()
    console.log(username)
    console.log(password)

    if(username== "john" && password==123456){
      window.location.replace('profile.html')
      alert('logged in successfully');
    }else  if(username== "jane" && password==123456){
      window.location.replace('profile.html')
      alert('logged in successfully');
    }
     else if(username== "roberts" && password==123456){
      window.location.replace('profile.html')
      alert('logged in successfully');
    }
    else{
        alert("user not found")
    }
  //   window.location.replace('profile.html')
  //   alert('logged in successfully');
})