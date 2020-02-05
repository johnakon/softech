class Laptop{
    constructor(lapHddSize, lapRam, lapCpuSpeed, lapBatteryLife, lapScreenSize, lapModel, lapMake, lapPrice, lapOs, lapSerialNum, lapDateOfMake){
        this.hddSize = lapHddSize;
        this.ram = lapRam;
        this.cpuSpeed = lapCpuSpeed;
        this.batteryLife = lapBatteryLife;
        this.screenSize = lapScreenSize;
        this.lapModel = lapModel
        this.make = lapMake;
        this.price = lapPrice;
        this.os = lapOs;
        this.serialNum = lapSerialNum
        this.dom = lapDateOfMake
    }

    //adding a method to return the printed string
    // compose a 
    printableString(){
        return `lap properties hddSize: ${this.hddSize} \n RAM size: ${this.ram} \n CPUSpeed: ${this.cpuSpeed} \n BatteryLife: ${this.batteryLife} \n ScreenSSize: ${this.screenSize} \n Laptop mdel: ${this.lapModel} \n Laptop amnufucturer: ${this.make} \n Laptop price: ${this.price} \n Laptop OS: ${this.os} \n Laptop serial num: ${this.serialNum} \n Date of maufuctury: ${this.dom}:`
    }
    checkRam(){
        if(typeof this.ram == "number"){
            return true;
        }else{
            return false;
        }
    }
    //other methods
    //
    laptopAge(){
        var currentDate = new Date()
        var currentYear = currentDate.getFullYear()
        return `${currentYear} - ${this.dom.getFullYear()}`
    }

    adjustPrice(){
       var currentLapTopAge = this.laptopAge()
    //    var discount = 0;
       if(currentLapTopAge > 3){
           var discount = (this.price * 0.3)
       }
       return `${this.price} - ${discount}`
    }
}

module.exports = Laptop