
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
    sessionStorage.setItem('youtube',a.value);

    a=document.getElementsByTagName("input")[6];
    sessionStorage.setItem('github',a.value);

    a=document.getElementsByTagName("input")[7];
    sessionStorage.setItem('linkedin',a.value);

    a=document.getElementsByTagName("input")[8];
    sessionStorage.setItem('facebook',a.value);

    a=document.getElementsByTagName("input")[9];
    sessionStorage.setItem('instagram',a.value);

    a=document.getElementsByTagName("input")[10];
    sessionStorage.setItem('twitter',a.value);

    window.open("cartaodevisita.html","_blank");
}
