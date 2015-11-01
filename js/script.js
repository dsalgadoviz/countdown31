function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(40.7859249, -119.2233844),
          zoom: 13,
          mapTypeId: google.maps.MapTypeId.MAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

// fin mapa
function contador(){
$('#counter').countdown({startTime: "01:12:32:55"});
}


function countDown(repite,a,me,d,h,m,s){
    var form=document.getElementById('form');
    if (repite=='true'){
 
    var anyo=a;
    var mes=me-1;
    var dia=d;
    var hora=h;
    var minuto=m;
    var segundo=s;
 
    var La_fecha = new Date(); 
    var La_fecha_total = new Date(anyo,mes,dia,hora,minuto,segundo); 
    toSecond = (La_fecha_total - La_fecha)/1000
    toDay = parseInt(toSecond/86400);
    toSecond=toSecond-(toDay*86400);
    toHour = parseInt(toSecond/3600);
    toSecond=toSecond-(toHour*3600);
    toMinute=parseInt(toSecond/60);
    toSecond=parseInt(toSecond-(toMinute*60));
    }
         
    toSecond=toSecond-1;
         
         
    if(toSecond<0)
    {
        toSecond=59;
        toMinute=toMinute-1;
    }
    form.second.value=toSecond;
 
    if(toMinute<0)
    {
        toMinute=59;
        toHour=toHour-1;
    }
    form.minute.value=toMinute;
 
         
    if(toHour<0)
    {   toHour=23;
            toDay=toDay-1;
             
    }
    form.hour.value=toHour;
    form.day.value=toDay;
    if(toDay<0)
    {
         
        form.second.value=0;
        form.minute.value=0;
        form.hour.value=0;
        form.day.value=0;
             
    }
         
         
 
    else{
        setTimeout("countDown('false')",1000);
    }
}

