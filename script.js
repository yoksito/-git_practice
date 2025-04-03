const randomNumber = num => {
    return Math.floor(Math.random()*num);
}

const words = {
    sign: ['star', 'moon', 'sun', 'comet'],
    luck: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    message: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

let messages= [];

for (let word in words) {
    let randoms = randomNumber(words[word].length)

    switch (word) {
        case 'sign':
            messages.push(`your sign is ${words[word][randoms]}`)
            break;
        case 'luck':
            messages.push(`You are having ${words[word][randoms]}`)
            break;
        case 'message':
            messages.push(`You should: ${words[word][randoms]}`)
            break;
    }
}

console.log(messages)