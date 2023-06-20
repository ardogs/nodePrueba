const fs = require('fs');
const color =  require('colors');

const crearArchivo = async (base = 5, listar =  false, hasta = 10) => {
    try {
        let salida = '';
        salida = 
        `=======================\nTabla del ${base}\n=======================\n`




        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}  ${(i !== 10) ? '\n' : ''}`
        }

        ( listar ) ? console.log(salida) : '';

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creada`
    } catch (err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}