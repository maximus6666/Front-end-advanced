function* createIdGenerator() {
    let i = 0;
    while(true) {
        yield ++i;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
