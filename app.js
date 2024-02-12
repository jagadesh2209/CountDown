const str=document.getElementById("start");
const res=document.getElementById("reset")
const sto=document.getElementById("stop")
var set;

const s1=document.getElementById("sp1")
const s2=document.getElementById("sp2")
const s3=document.getElementById("sp3")

    const h=document.getElementById("hr")
    const m=document.getElementById("min")
    const s=document.getElementById("sec")
    
    h.addEventListener("input",function(){
        
       if(h.value>=1&&h.value<=12)
       {
        var pad=h.value
         s1.innerText=pad.padStart(2,"0")
       }
       
    })
    m.addEventListener("input",function(){
        if(m.value>=1&&m.value<=60)
       {
        var pad=m.value
            s2.innerText=pad.padStart(2,"0")
       }
       
    })

    s.addEventListener("input",function(){
        if(s.value>=1&&s.value<=60)
       {
        var pad=s.value
        s3.innerText=pad.padStart(2,"0")
       }
    })

    let sec;
    let min;
    let hr;

    str.addEventListener("click",function(){
        sec=Number(s.value)
        min=Number(m.value)
        hr=Number(h.value)
        set=setInterval(function(){
            
            if(sec==0&&min==0&&hr==0)
            {
                str.innerText="Start"
                s.value=""
                m.value=""
                h.value=""
                
                clearInterval(set)
            }
            
            if(sec!=0){
                sec--
            
            }
            if(sec==0&&min!=0)
            {
                min--
                sec=59
            }
            if(min==0&&hr!=0)
            {
                hr--
                min=59
            }
          
            s3.innerText=String(sec).padStart(2,"0")
            s2.innerText=String(min).padStart(2,"0")
            s1.innerText=String(hr).padStart(2,"0")

        },1000)
         
        })
        res.addEventListener('click',function(){

            clearInterval(set)
            str.innerText="Start"
            h.value=""
            m.value=""
            s.value=""
            sp1.innerText="00"
            sp2.innerText="00"
            sp3.innerText="00"

        })

        sto.addEventListener('click',function(){
            clearInterval(set)

            h.value=s1.innerText
            m.value=s2.innerText
            s.value=s3.innerText

            str.innerText="Restart"


        })

    
   
    




