function StopWatch() 
{
    let duration = 0;
    let startTime = 0;
    let running = false;

    this.start = function() //gets the 'current time' as start time
    {
        if(running == true)
            throw new Error("Clock is already running!");
        const date = new Date();
        startTime = date.getTime(); //milliseconds since January 1, 1970
        running = true;
    }

    this.stop = function() //subtracts start time from endTime to get milliseconds ellapsed
    {
        if(running == false)
            throw new Error("Clock is already stopped!");
        const date = new Date();
        const endTime = date.getTime();
        duration = duration + (endTime - startTime);
        running = false;
    }

    this.reset = function() //resets total duration to zero
    {
        if(running == true)
            throw new Error("End run first to reset.");
        duration = 0;
    }

    //getter to display duration
    Object.defineProperty(this,"duration",{
        get: function(){
            return duration/1000;
        }
    })
}

let clock = new StopWatch();