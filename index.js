
function funcao(){   
    var a=document.getElementsByTagName("input")[0]; // nome
    sessionStorage.setItem('primeiroNome',a.value);  
    var b= document.getElementsByTagName("input")[1]; // sobrenome
    var c=a.value+" "+b.value;
    sessionStorage.setItem('nome',c);

    a=document.getElementsByTagName("input")[2];
    sessionStorage.setItem('formacao',a.value);

    a=document.getElementsByTagName("input")[3];
    sessionStorage.setItem('profissao',a.value);

    a=document.getElementsByTagName("input")[4];
    sessionStorage.setItem('experiencia',a.value);
    
    a=document.getElementsByTagName("input")[5];   
    if(a.value == ""){
        sessionStorage.setItem('youtube',"#base");               
    }else{        
        sessionStorage.setItem('youtube',a.value);
    }   

    a=document.getElementsByTagName("input")[6];
    if(a.value == ""){
        sessionStorage.setItem('github',"#base");               
    }else{        
        sessionStorage.setItem('github',a.value);
    }     

    a=document.getElementsByTagName("input")[7];
    if(a.value == ""){
        sessionStorage.setItem('linkedin',"#base");
    }else{
        sessionStorage.setItem('linkedin',a.value);
    }   

    a=document.getElementsByTagName("input")[8];
    if(a.value == ""){
        sessionStorage.setItem('facebook',"#base");
    }else{
        sessionStorage.setItem('facebook',a.value);
    }    

    a=document.getElementsByTagName("input")[9];
    if(a.value == ""){
        sessionStorage.setItem('instagram',"#base");
    }else{
        sessionStorage.setItem('instagram',a.value);
    }    

    a=document.getElementsByTagName("input")[10];
    if(a.value == ""){
        sessionStorage.setItem('twitter',"#base");
    }else{
        sessionStorage.setItem('twitter',a.value);
    } 

    window.open("cartaodevisita.html","_blank");
}
