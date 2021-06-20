const colors = require('colors')
const argv = require('yargs')
                    .options('b', {
                      alias: 'base',
                      type: 'number',
                      demandOption: true,
                      describe: `${"Es la base de la tabla de multiplicar".blue}`
                    })
                    .option('l', {
                      alias: 'listar',
                      type: 'boolean',
                      // demandOption: false,
                      default: false,
                      describe: `${"Muestra la tabla en la consola".blue}`
                    })
                    .option('h', {
                      alias: 'hasta',
                      type: 'number',
                      // demandOption: true,
                      default: 10,
                      describe: `${'Hasta que numero se realizara la multiplicacion'.blue}`
                    })
                    .check((argv, options) => {
                      if (isNaN(argv.b)) {
                        throw `${"La base tiene que ser un numero".red}`
                      }
                      if (isNaN(argv.h)) {
                        throw `${"el parametro debe recibir un numero".red}`
                      }
                      return true
                    })
                    .argv;


module.exports = argv;