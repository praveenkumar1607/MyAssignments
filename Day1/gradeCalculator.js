function studentgrade(score){
    let grade;

    switch (true){
        case (score <50):
            console.log(" Fail")
            grade="F"
            break;
        case (score>50 && score <60):
            console.log("E grade");
            grade="E"
            break;
        case (score>=60 && score <70):
            console.log("D grade");
            grade="D"
            break;
        case (score>=70 && score <80):
            console.log("c grade");
            grade=C
            break;
        case (score>=80 && score <90):
            console.log(" B grade");
            grade="B"
            break;
        case (score>=90 && score <=100):
            console.log(" A grade");
            grade="A"
            break;
        default :
        console.log("invalid score")
        grade="Invalid"
        break;

    }
    return grade
}

console.log("Grade for the given score is " +studentgrade(200))
