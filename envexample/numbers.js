import { Command } from 'commander';

const program = new Command();

program
    .option('-d', 'Para debug', false)
    .option('-p <port>', 'Puerto donde va a correr el server', 8080)
    .option('--mode <mode>', 'Modo de trabajo', 'production')
    .requiredOption('-u <user>', 'Usuario de la app', 'No hay usuario definido')
    .option('-n, --numbers [numbers...]', 'numeros informados')


program.parse();


process.on('uncaughtException', error => {
    console.log(error)
    switch(error.description){
        case 'Error de tipo': return process.exit(-4)
        case 'sin numeros': return process.exit(-5)
    }
})

process.on('exit', code => {
    if(code){
        console.log(`Saliendo con codigo: ${code}`)
    }else{
        console.log('Adios sin errores ')
    }
})



let numbers = program.opts().numbers;

const listNumbers = numbers => {
    if(numbers.length == 0){
        throw {
            description: 'sin numeros'
        }
    }
    numbers.forEach(num => {
        if(isNaN(num)){
            throw {
                description: 'Error de tipo',
                numeros: numbers,
                tipos: numbers.map(n => isNaN(n) ? typeof n : 'number')
            }
        }
    });

    console.log(numbers)
}

listNumbers(numbers)