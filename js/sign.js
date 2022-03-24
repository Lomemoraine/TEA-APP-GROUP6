function User(email,uname){
    this.email =email
    this.uname =uname
    this.pass=this.generatePass()
}
 User.prototype.generatePass=function(){
     return Math.floor(Math.random() *10000)
 }
 const newUser = new User (email, username)
 console.log(newUser)
  //to local storage
  function storeData (userInstance){
      if(window.localStorage){
          localStorage.setItem('user', JSON.stringify(userInstance))
          alert(JSON.parse(localStorage.getItem('user')).pass)

          window.location.replace('sign.html')
      }
      else{alert("not supported")}
  }
  storeData(newUser)

  function login(e){
      e.preventDefault()

    //   get form inputs
    const pass = document.getElementById('password').value 
    
    // confirm user credentials
    function checkCredentials(pass){
        // request user data from local storage
        const storedPass = JSON.parse(localStorage.getItem('user')).pass

        if (pass == storedPass){
            window.location.replace('profile.html')
        }else{
            alert("no match user")
        }
    }
    checkCredentials(pass)
  }