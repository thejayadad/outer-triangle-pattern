

let row = 5;

for (let i = 1; i<=row; i++){
    for (let j = i; j<=row; j++){
        document.write(" &nbsp")
    }
    for (let j = 1; j<i; j++){
        if (i == row || j==1){
            document.write("x")
        } else {
            document.write(" &nbsp")
        }
    } for (let j = 1; j<=i; j++){
        if(i == row || j == i){
            document.write("x")
        } else {
            document.write(" &nbsp")
        }
    }
    document.write("<br/>")
}