function receivesAFunction(callback){
    return callback((Spy) => {
        return Spy;
    });
}

let fn;
const returnsANamedFunction = () => {
    const before = () =>{
        fn = receivesAFunction();
    } 
    return before;
}

const returnsAnAnonymousFunction = () => {
    const before = () => {
        fn = returnsAnAnonymousFunction(() => {
            return fn;
        });
    }
    return before;
}

receivesAFunction();
returnsANamedFunction();
returnsAnAnonymousFunction();