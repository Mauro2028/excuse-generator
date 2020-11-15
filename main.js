window.onload = function(){
    //array with the words
    var first = 'Un ';
    var adj = [ 'nuclear ', 'molesto ', 'solo ','loco ','brillante ','maloliente ','lento ','viejo ' ];
    var noun = ['corredor ',' mapache ',' perro ', 'comerciante ', 'conductor ', 'comediante ', 'una manzana '];
    var action = ['agarro mi ', 'tiro mi ', 'le gritó a mi ' , 'me pateo ', 'robo mi ', ' quemo mi ', 'mordio mi ', 'golpeo mi '];
    var possetion = ['dedo del pie ', 'carro ', 'reloj ', 'zapatp ', 'billetera ', 'camiseta ', 'llaves ', 'computadora ', 'telefono '];
    var where = ['en la calle','en mi casa', 'en frente de la oficina', 'cerca del centro comercial', 'cerca del colegio', 'en la parada del autobus'];
    
    // declaring random variables
     var rdm1 = Math.floor((Math.random() * adj.length) );
     var rdm2 = Math.floor((Math.random() * noun.length) );
     var rdm3 = Math.floor((Math.random() * action.length) );
     var rdm4 = Math.floor((Math.random() * possetion.length) );
     var rdm5 = Math.floor((Math.random() * where.length) );
    
      //creating a sentence (the excuse)
      document.querySelector('#theexcuse').innerHTML = first + adj[rdm1] + noun[rdm2] + action[rdm3] + possetion[rdm4] + where[rdm5]; 
    
  }