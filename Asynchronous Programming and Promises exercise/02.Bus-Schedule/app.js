function solve(){
    function depart(){
        console.log("Depart TODO...")
    }

    function arrive(){
        console.log("Arive TODO...")
    }

    return{
        depart,
        arrive
    };


}
let result = solve();