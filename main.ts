// This function is for hybrid vehicles over 60k and asks the user if they want to drive there vehicle off road or not. It then recommends a car based off their response. 
function setCarUse60h (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Jeep Wrangler 4xe Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Volvo XC 60 Recharge", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This function takes gas cars over 60k and asks the user if they want to use their car off road. With this informaiton the function then recommends a car for the user. 
function setCarUse60g (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Toyota 4Runner", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Acura MDX", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This function contains the final question in our code to find the user their perfect car. This functions takes the data on wheter the user selcted to drive their car off road or not and presents them with the perfect car based on their response.
function setCarUse81g (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Land Rover Defender", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Audi RS6", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// The function takes the response that the budget is over 80,000 and asks for the type of fuel for the car the user wants (gas, hybrid, or electric) After the user inputs there fuel type the function asks the user if they want to use the car off road or not. The response will be used as data for another function to help decide what car the user should get. If the user enters in data that is not valid and letter but "e,h,g" the function will show an error message.
function setFuel80 (fuel: string) {
    if (fuel == "e") {
        setCarUse80e(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "h") {
        setCarUse80h(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "g") {
        setCarUse80g(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This function sets up what budget will be used and after a budget is set the function then sends the user to ask if they want an electric gas or hybrid car.
function setBudget (Budget: number) {
    if (Budget < 15000) {
        game.showLongText("Get yo money up not yo funny up", DialogLayout.Bottom)
        findCarSuccessful += 2
    } else if (Budget < 20000) {
        game.showLongText("All cars at this price are similar", DialogLayout.Bottom)
        text_list = [
        "Volkswagen Jetta",
        "Kia Forte",
        "Honda HR-V",
        "Hyundai Kona",
        "Nissan Versa"
        ]
        game.showLongText("You can consider a " + text_list._pickRandom(), DialogLayout.Center)
        findCarSuccessful += 1
    } else if (Budget < 40000) {
        setFuel40(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget < 60000) {
        setFuel60(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget < 80000) {
        setFuel80(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget >= 80000) {
        setFuel81(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This function is used when the budget is between 20k and 40k. and gives the user options based on their fuel type selection.
function setFuel40 (fuel: string) {
    if (fuel == "e") {
        game.showLongText("Nissan Leaf", DialogLayout.Center)
    } else if (fuel == "h") {
        game.showLongText("Toyota Prius", DialogLayout.Center)
    } else if (fuel == "g") {
        setCarUse40g(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This function is used when the budget is over 80k and gives the user options about driving their car off road based on their fuel type selection.
function setFuel81 (fuel: string) {
    if (fuel == "e") {
        setCarUse80e(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "h") {
        setCarUse80h(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "g") {
        setCarUse80g(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse80h (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Volvo XC90 Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Lexus RX450hL", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse40g (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Jeep Wrangler", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Chrysler Pacifica", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse81h (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Range Rover Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Porsche Cayenne E-Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse81e (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Tesla Model X", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Tesla Roadster", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse80e (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Rivian R1T", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Tesla Model Y", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setFuel60 (fuel: string) {
    if (fuel == "e") {
        game.showLongText("Tesla Model 3", DialogLayout.Center)
        findCarSuccessful += 1
    } else if (fuel == "h") {
        setCarUse60h(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "g") {
        setCarUse60h(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse80g (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("GMC Yukon AT4", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Audi S6", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
// This contains the intro statement as well as conditions for our matching system to match users with the best possible cars based of their intents and budgets. 
let text_list: string[] = []
let findCarSuccessful = 0
game.showLongText("Welcome to the Car Finder Tool", DialogLayout.Top)
while (findCarSuccessful == 0) {
    setBudget(game.askForNumber("What is your budget?"))
}
// This if statment contains a win condition when a user is matched with a car. Additionally, it contains a lose condition for when the user messes up a response and ends the game.
if (findCarSuccessful == 1) {
    game.over(true)
} else if (2 == findCarSuccessful) {
    game.over(false)
}
