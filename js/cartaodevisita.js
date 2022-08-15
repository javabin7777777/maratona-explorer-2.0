
var b= document.getElementsByTagName("h1")[0];
b.innerText=sessionStorage.nome;
b= document.getElementsByTagName("span")[0];
b.innerText=sessionStorage.primeiroNome;

if(sessionStorage.formacao == ""){
    document.getElementsByTagName("p")[0].style.opacity = 0;
}else {
    b= document.getElementsByTagName("h1")[1];
    b.innerText=sessionStorage.formacao;
}

if(sessionStorage.profissao == ""){
    document.getElementsByTagName("p")[1].style.opacity = 0;
}else {
    b= document.getElementsByTagName("h1")[2];
    b.innerText=sessionStorage.profissao;
}

if(sessionStorage.experiencia == ""){
    document.getElementsByTagName("p")[2].style.opacity = 0;
}else{
    b= document.getElementsByTagName("h1")[3];
    b.innerText=sessionStorage.experiencia;
}

b= document.getElementsByTagName("a")[0];
if(sessionStorage.youtube == "#base"){
    b.target="";
}
b.href=sessionStorage.youtube;

b= document.getElementsByTagName("a")[1];
if(sessionStorage.github == "#base"){
    b.target="";
}
b.href=sessionStorage.github;

b= document.getElementsByTagName("a")[2];
if(sessionStorage.linkedin == "#base"){
    b.target="";
}
b.href=sessionStorage.linkedin;

b= document.getElementsByTagName("a")[3];
if(sessionStorage.facebook == "#base"){
    b.target="";
}
b.href=sessionStorage.facebook;

b= document.getElementsByTagName("a")[4];
if(sessionStorage.instagram == "#base"){
    b.target="";
}
b.href=sessionStorage.instagram;

b= document.getElementsByTagName("a")[5];
if(sessionStorage.twitter == "#base"){
    b.target="";
}
b.href=sessionStorage.twitter;