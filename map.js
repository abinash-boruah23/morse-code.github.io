text.addEventListener("keyup",()=>{
    textarr=[]
    textpush();
    for(let i = 0; i<x.length; i++){

        if(x[i] == 'a' || x[i] == "A"){
            textarr.push('•–')
        }
        else if(x[i] == 'b' || x[i]== 'B'){
            textarr.push('–••')
        }
        else if(x[i] == 'c' || x[i]== 'C'){
            textarr.push('–•–•')
        }
        else if(x[i] == 'd' || x[i]== 'D'){
            textarr.push('–••')
        }
        else if(x[i] == 'e' || x[i]== 'E'){
            textarr.push('•')
        }
        else if(x[i] == 'f' || x[i]== 'F'){
            textarr.push('••–•')
        }
        else if(x[i] == 'g' || x[i]== 'G'){
            textarr.push('––•')
        }
        else if(x[i] == 'h' || x[i]== 'H'){
            textarr.push('••••')
        }
        else if(x[i] == 'i' || x[i]== 'I'){
            textarr.push('••')
        }
        else if(x[i] == 'j' || x[i]== 'J'){
            textarr.push('•–––')
        }
        else if(x[i] == 'k' || x[i]== 'K'){
            textarr.push('–•–•')
        }
        else if(x[i] == 'l' || x[i]== 'L'){
            textarr.push('•–••')
        }
        else if(x[i] == 'm' || x[i]== 'M'){
            textarr.push('––')
        }
        else if(x[i] == 'n' || x[i]== 'N'){
            textarr.push('–•')
        }
        else if(x[i] == 'o' || x[i]== 'O'){
            textarr.push('–––')
        }
        else if(x[i] == 'p' || x[i]== 'P'){
            textarr.push('•––•')
        }
        else if(x[i] == 'q' || x[i]== 'Q'){
            textarr.push('––•–')
        }
        else if(x[i] == 'r' || x[i]== 'R'){
            textarr.push('•–•')
        }
        else if(x[i] == 's' || x[i]== 'S'){
            textarr.push('•••')
        }
        else if(x[i] == 't' || x[i]== 'T'){
            textarr.push('–')
        }
        else if(x[i] == 'u' || x[i]== 'U'){
            textarr.push('••–')
        }
        else if(x[i] == 'v' || x[i]== 'V'){
            textarr.push('•••–')
        }
        else if(x[i] == 'w' || x[i]== 'W'){
            textarr.push('•––')
        }
        else if(x[i] == 'x' || x[i]== 'X'){
            textarr.push('–••–')
        }
        else if(x[i] == 'y' || x[i]== 'Y'){
            textarr.push('–•––')
        }
        else if(x[i] == 'z' || x[i]== 'Z'){
            textarr.push('––••')
        }
        //numbers
        else if(x[i] == '0'){
            textarr.push('–––––')
        }
        else if(x[i] == '1'){
            textarr.push('•––––')
        }
        else if(x[i] == '2'){
            textarr.push('••–––')
        }
        else if(x[i] == '3'){
            textarr.push('•••––')
        }
        else if(x[i] == '4'){
            textarr.push('••••–')
        }
        else if(x[i] == '5'){
            textarr.push('•••••')
        }
        else if(x[i] == '6'){
            textarr.push('–••••')
        }
        else if(x[i] == '7'){
            textarr.push('––•••')
        }
        else if(x[i] == '8'){
            textarr.push('–––••')
        }
        else if(x[i] == '9'){
            textarr.push('––––•')
        }

        //space

        else if(x[i] == ' '){
            if(x[i]==x[i+1]){
                textarr.push('')
            }
            else{
                textarr.push('/ ')
            }
        }
    }
    display();
})