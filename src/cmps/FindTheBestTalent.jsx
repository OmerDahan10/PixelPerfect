export function FindTheBestTalents(){
    return(
        <div className="find-the-best">
            <span className="find-the-best-talent">Find the <br /> best <span className="pink">talent</span></span>
            <p>
            Finding the right people and building high <br />
            performing teams can be hard. Most companies <br />
            aren’t tapping into the abundance of global talent. <br /> 
            We’re about to change that.
            </p>

            <img className="semi-circle" src={require("../img/semi-circle.png")}  />
            <img className="semi-circle-black" src={require("../img/semi-circle-black.png")}  />
        </div>
    )
}