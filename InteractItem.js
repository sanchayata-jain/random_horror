export class InteractItem {

    constructor() {
        this.name = "";
    }

    displayName() {
        console.log(this.name);
    }

    interact(item) {
        throw new Error(["An abstract method has been invoked"]);
    }

}

export class Door extends InteractItem {
    constructor() {
        super();
        this.name = "door";
    }

    interact(item) {
        if(item.name == "flashlight") {
            console.log("Well Done for finding the door...")
            return true;

        }
        console.log(`You can't use this ${item.name}, choose better!`);
        return false;  
    }

}

export class BedsheetGhost extends InteractItem {
    constructor() {
        super();
        this.name = "bedsheet ghost";
    }

    interact(item) {
        if(item.name == "slingshot") {
            console.log("Well Done, you have fought the bedsheet ghost...");
            return true;
        } 
        console.log(`You can't use this ${item.name}, choose better!`);
        return false;  
    }
}

export class Stairs extends InteractItem {
    constructor() {
        super();
        this.name = "stairs";
    }

    interact(item) {
        if(item.name == "surfboard") {
            console.log("Have fun surfing down the stairs...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }

}

export class TV extends InteractItem {
    constructor() {
        super();
        this.name = "television";
    }

    interact(item) {
        if(item.name == "remote") {
            console.log("The TV is now turned on...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }
}

export class DogBowl extends InteractItem {
    constructor() {
        super();
        this.name = "dog bowl";
    }

    interact(item) {
        if(item.name == "steak") {
            console.log("Well Done, you can now feed the dog...");
            return true;
        }
            console.log(`You can't use this ${item.name}, choose better!`);
            return false;
    }
}

