
get_all_users().then((res)=>{
    let driver = res
    console.log("HIIIII")
    driver.forEach((val,ind)=>{
        if (Number(val.pnumber) === Number(pnumberd)){                      //aaiya check kar k val.type= driver possible che k nai atariya to hatai didhu che 
                let new_div = document.getElementById('show_driver');
                console.log("hi")
                new_div.innerHTML+=`<div style="border: solid 5px; box-shadow: 6px 6px 0px rgb(22, 27, 105); border-radius: 5px; width: 26%; margin-left: 8%;margin-bottom: 1% ; padding-right:3%; padding-left:6%; padding-top:1%; padding-bottom:1%; ">
                                    <h5>Name: ${namep}</h5>
                                    <h6>Phone No: ${pnumberp}</h6>
                                    <h6>From:${fromp}  -> To: ${top} 
                                    <button class="accept_driver">Accept</button>
                                </div>`
                
                document.querySelector('.accept_driver').addEventListener('click',(e)=>{
                    alert("You have Accepted the request and He/She is added to you car");
                    this.disabled=true;

                    
                    let addin = {namep:namep,pnumberp:Number(pnumberp),named:named,pnumberd:Number(pnumberd),emaild:emaild};
                    
                    //groupInCar(namep,pnumberp,pnumberd,named)

                    console.log(addin)
                    
                    axios.post('https://still-inlet-89790.herokuapp.com/groups',addin,{
                            headers:{
                                'Content-type':'application/json'
                            }
                        }).then((res)=>{
                            window.location.href = "inner.html"
                        })            
            })
        }
        
    })
})