const { crearArchivo } =  require('./helpers/multiplicar');
const argv = require('./config/yargs');



console.clear();
const { base , listar, hasta  } =  argv ;
crearArchivo( base, listar, hasta  )
    .then( nombreArchivo => console.log(nombreArchivo) )
    .catch( err => console.log(err).red ) 






