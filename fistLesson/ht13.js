var myBind = function(func, Args){
    var bindArgs = [].slice.apply(myBind)
    return function() { 
        func.apply(Args, bindArgs)
    }
}


class Devices {
    count() {
        console.log("Count some numbers");
    }
    display(){
        console.log("Display something");
    }
}
class Laptop extends Devices {
    surfTheInternet(){
        console.log("Search the most interesting information");
    }
    

}
class Smartphone extends Devices {
    call(){
        console.log("Call your friends");
    }

}
class Dell extends Laptop {
    playGames(){
        console.log("Play Minecraft");
        
    }

}
class Asus extends Laptop {
    watchMovie(){
        console.log("Watch new movie");
    }

}
class IPhone extends Smartphone {
    takePhotos(){
        console.log("Take photos for your instagram");
    }

}
class Meizu extends Smartphone {
    checkYourMail(){
        console.log("Check your mail somewhere");
    }


}