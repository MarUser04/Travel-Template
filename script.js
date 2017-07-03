//botones
var hotels= document.getElementById('btnHotel');
var sports= document.getElementById('btnSports');
var family= document.getElementById('btnFamily');
var spiritual= document.getElementById('btnSpiritual');

//imagenes
var hotelsImg= document.getElementById('imgHotels');
var sportImg= document.getElementById('imgSports');
var familyImg= document.getElementById('imgFamily');
var spiritualImg= document.getElementById('imgSpiritual');


var botones= [hotels, sports, family, spiritual];
var imgs= [hotelsImg, sportImg, familyImg, spiritualImg];

/*
(function(){
    for(var i=0; i<botones.length; i++){
        botones[i].addEventListener('click', function(){
            for(var j=0; j<imgs.length;j++ ){
                imgs[j].className='no-mostrar';
                if(i==j){
                    imgs[j].className='mostrar';
                }
            }
        });
    }
})();*/




hotels.addEventListener('click', function(){
   hotelsImg.className='mostrar';
    sportImg.className='no-mostrar';
    familyImg.className='no-mostrar';
   spiritualImg.className="no-mostrar"; 
});

sports.addEventListener('click', function(){
    hotelsImg.className='no-mostrar';
    sportImg.className='mostrar';
    familyImg.className='no-mostrar';
    spiritualImg.className="no-mostrar";
});

family.addEventListener('click', function(){
    familyImg.className="mostrar";
    hotelsImg.className='no-mostrar';
    sportImg.className='no-mostrar';
    spiritualImg.className="no-mostrar";
});

spiritual.addEventListener('click', function(){
  familyImg.className="no-mostrar";
    hotelsImg.className='no-mostrar';
    sportImg.className='no-mostrar';
    spiritualImg.className="mostrar";
});


////
var nombre= document.getElementById('nombre');
var email= document.getElementById('email');
var mensaje=document.getElementById('mensaje');
var btnEnviar= document.getElementById('enviar');


var validarForm= function(){

        var complete= true;
    if(nombre.value===""){
        alert("Ingrese nombre.");
        complete=false;
    }
    if(email.value===""){
        alert("Ingrese correo.");
        complete=false;
    }
    if(mensaje.value===""){
        alert("Deje un mensaje.");
        complete=false;
    }

    if(complete){
        alert("Mensaje enviado exitosamente");
    }

}

btnEnviar.addEventListener('click', validarForm);