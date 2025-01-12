import inquirer from "inquirer";



async function main() {
    let score = 0
    const questions = [
        {questions: "Capital of France",choices:["paris","london","berlin","madrid"],answer:"paris"},
        {questions: "Capital of Germany",choices:["paris","london","berlin","madrid"],answer:"berlin"},
        {questions: "Capital of Spain",choices:["paris","london","berlin","madrid"],answer:"madrid"},
    ]
    questions.sort(() => Math.random() - 0.5);


    for (const object of questions) {
        const answers = await inquirer.prompt({
            type: "list",
            name: "answer",
            message: object.questions,
            choices: object.choices
        })
        if (answers.answer === object.answer) {
            score ++
            console.log("Correct!")
            } else {
            console.log("Incorrect. The correct answer is " + object.answer)    
    }
}
console.log("Your final score is " + score + "/" + questions.length)
}
main()