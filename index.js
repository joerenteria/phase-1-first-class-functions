function receivesAFunction(callback){
    callback();

}

function returnsANamedFunction(){

    return function joe() {
        console.log(`Nom nom nom, this is delicious!`);
      }

    
}

function returnsAnAnonymousFunction(){

    return function () {
        console.log(`Nom nom nom, this is delicious!`);
      }

    
}