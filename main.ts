function setCarUse60h (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Toyota Highlander Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Volvo XC 60 Recharge", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setCarUse60g (offroadYorN: string) {
    if (offroadYorN == "y") {
        game.showLongText("Toyota Highlander Hybrid", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else if (offroadYorN == "n") {
        game.showLongText("Volvo XC 60 Recharge", DialogLayout.Bottom)
        findCarSuccessful += 1
    } else {
        game.showLongText("Error: option unavailable", DialogLayout.Bottom)
    }
}
function setFuel80 (fuel: string) {
	
}
function setBudget (Budget: number) {
    if (Budget < 15000) {
        game.showLongText("Get yo money up not yo funny up", DialogLayout.Bottom)
        findCarSuccessful += 2
    } else if (Budget < 20000) {
        game.showLongText("Volkswagen Jetta", DialogLayout.Center)
        findCarSuccessful += 1
    } else if (Budget < 40000) {
        setFuel40(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget < 60000) {
        setFuel60(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget < 80000) {
        setFuel80(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget >= 80000) {
        setFuel81(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    }
}
function setFuel40 (fuel: string) {
    if (fuel == "e") {
        game.showLongText("Nissan Leaf", DialogLayout.Center)
    } else if (fuel == "h") {
        game.showLongText("Toyota Prius", DialogLayout.Center)
    } else if (fuel == "g") {
        setCarUse40g(game.askForString("Will this car be used offroad? (y or n)", 1))
    }
}
function setFuel81 (fuel: string) {
	
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
function setFuel60 (fuel: string) {
    if (fuel == "e") {
        game.showLongText("Tesla Model 3", DialogLayout.Center)
        findCarSuccessful += 1
    } else if (fuel == "h") {
        setCarUse60h(game.askForString("Will this car be used offroad? (y or n)", 1))
    } else if (fuel == "g") {
    	
    }
}
let findCarSuccessful = 0
setBudget(game.askForNumber("What is your budget?"))
while (findCarSuccessful == 0) {
    game.showLongText("Welcome to the Car Finder Tool", DialogLayout.Top)
}
if (findCarSuccessful == 1) {
    game.over(true)
} else if (findCarSuccessful == 2) {
    game.over(false)
} else {
    game.reset()
}
