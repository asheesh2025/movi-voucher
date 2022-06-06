function userdata()
  {
    let obj={
      name: document.querySelector("#name").value,
      email: document.querySelector("#email").value,
      address:document.querySelector("#address").value,
      wallet: document.querySelector("#amount").value,
    }
    let arr=[]
    arr.push(obj)
    localStorage.setItem("user",JSON.stringify(arr))
    document.querySelector("#name").value=null
    document.querySelector("#email").value=null
    document.querySelector("#address").value=null
    document.querySelector("#amount").value=null
  }