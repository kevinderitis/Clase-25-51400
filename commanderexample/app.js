import { Command } from "commander";

const program = new Command();

program
    .option('-d', 'Debug variable', false)
    .option('-p <port>', 'Port', 8080)
    .option('--mode <mode>', 'Mode', 'development')
    .requiredOption('-u <user>', 'User', 'No se indica usuario')
    .option('-l, --letters [letters...]', 'Letras' )

    program.parse()



console.log(program.opts())
console.log(program.args)


