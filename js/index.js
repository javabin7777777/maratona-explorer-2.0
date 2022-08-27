
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
    if(checarUrl(a.value)){
        sessionStorage.setItem('youtube',a.value);
    }else{
        sessionStorage.setItem('youtube',"#base");
    }      

    a=document.getElementsByTagName("input")[6];
    if(checarUrl(a.value)){
        sessionStorage.setItem('github',a.value);               
    }else{        
        sessionStorage.setItem('github',"#base");
    }     

    a=document.getElementsByTagName("input")[7];
    if(checarUrl(a.value )){
        sessionStorage.setItem('linkedin',a.value);
    }else{
        sessionStorage.setItem('linkedin',"#base");
    }   

    a=document.getElementsByTagName("input")[8];
    if(checarUrl(a.value)){
        sessionStorage.setItem('facebook',a.value);
    }else{
        sessionStorage.setItem('facebook',"#base");
    }    

    a=document.getElementsByTagName("input")[9];
    if(checarUrl(a.value)){
        sessionStorage.setItem('instagram',a.value);
    }else{
        sessionStorage.setItem('instagram',"#base");
    }    

    a=document.getElementsByTagName("input")[10];
    if(checarUrl(a.value)){
        sessionStorage.setItem('twitter',a.value);
    }else{
        sessionStorage.setItem('twitter',"#base");
    } 

    window.open("cartaodevisita.html","_blank");

    function checarUrl(string){ // checa a url digitada no campo input
        try{
             let url=new URL(string);
             return true;
        }catch(e){
             return false;            
        }
     } 
}
