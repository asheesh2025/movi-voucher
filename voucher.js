const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
  async function fetchData()
  {
    try{
      const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
    let res= await fetch(url)
    let data= await res.json()
    appenddata(data[0].vouchers)
    //console.log(data[0].vouchers)
    }
    catch(error)
    {
      console.log(error)
    }
  }
  fetchData()

  function appenddata(data)
  {
    data.map(function(el)
    {
      let a=document.createElement("h1")
      a.innerText=el.name
      let b=document.createElement("img")
      b.src=el.image
      let c=document.createElement("h3")
      c.innerText=el.price
      let d=document.createElement("button")
      d.innerText="Buy"
      d.className="buy_voucher"
      d.addEventListener("click",function()
      {
        book(el)
      })
      let e=document.createElement("div")
      e.className="voucher"
      e.style.border="2px solid blue"
      e.append(b,a,c,d)
      document.querySelector("#voucher_list").append(e)
    })
  }
  document.querySelector("#wallet_balance").innerHTML=JSON.parse(localStorage.getItem("user"))[0].wallet
  let arr=JSON.parse(localStorage.getItem("purchase")) || []
  function book(el)
  {
    let obj={
      image: el.image,
      name: el.name,
      price: el.price,
    }
    arr.push(obj)
    localStorage.setItem("purchase",JSON.stringify(arr))
    let price1=el.price
    let amount=JSON.parse(localStorage.getItem("user"))[0].wallet
    if(amount<price1)
    {
      alert("Sorry! insufficient balance")
    }
    else{
      let price2=amount-price1
      //localStorage.setItem("user"[0].wallet,JSON.stringify(price2))
      JSON.parse(localStorage.getItem("user"))[0].wallet=price2
      document.querySelector("#wallet_balance").innerHTML=price2
      alert("Hurray! purchase successful")
    }
  }