function setBudget (num: number) {
    Budget = num
    if (Budget < 20000) {
        setFuel(game.askForString("Electric(e), Hybrid(h), or Gasoline(g)?", 1))
    } else if (Budget < 40000) {
    	
    } else if (Budget < 60000) {
    	
    } else if (Budget < 80000) {
    	
    } else if (Budget >= 80000) {
    	
    }
}
function setFuel (fuel: string) {
    fuelType = fuel
    if (fuelType == "e") {
    	
    } else if (fuelType == "e") {
    	
    }
}
let fuelType = ""
let Budget = 0
game.showLongText("Welcome to the Car Finder Tool", DialogLayout.Top)
setBudget(game.askForNumber("What is your budget?"))
