class Laptop{
    constructor(lapHddSize, lapRam, lapCpuSpeed, lapBatteryLife, lapScreenSize, lapModel, lapMake, lapPrice, lapOs, lapSerialNum){
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
    }

    //adding a method to return the printed string
    // compose a 
    printableString(){
        return `lap properties hddSize ${this.hddSize}:`
    }
    checkRam(){
        if(typeof this.ram == "number"){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = Laptop