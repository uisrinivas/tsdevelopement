interface SquareConfig{
    color? : string;
    width ?: number;
}

function createSquare(config: SquareConfig) : {color:string; area:number }{
    let newSquare= {color:"white",area:100}

    return newSquare;
}

let mySuare=createSquare({color:'red'});
