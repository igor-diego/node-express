import readLineSync from 'readline-sync'

let propriedadeCss = []

while (true) {
    let input = readLineSync.question('Digite sua propriedade: ')
    if(input === 'sair') {
        break
    } else {
        propriedadeCss.push(input)
    }
}

let result = propriedadeCss.sort();
console.log(result.join('\n'));




