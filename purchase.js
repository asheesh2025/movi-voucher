let data=JSON.parse(localStorage.getItem("purchase"))
  data.map(function(el)
  {
    let a=document.createElement("h1")
      a.innerText=el.name
      let b=document.createElement("img")
      b.src=el.image
      let c=document.createElement("h3")
      c.innerText=el.price
      let d=document.createElement("div")
      d.append(b,a,c)
      d.style.border="2px solid teal"
      document.querySelector("#purchased_vouchers").append(d)
  })
  let balance=JSON.parse(localStorage.getItem("user"))
  document.querySelector("#wallet_balance").innerHTML=balance[0].wallet