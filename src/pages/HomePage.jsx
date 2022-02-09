import React,{useState,useEffect} from "react";
import { BuildAndManage } from "../cmps/BuildAndManage.jsx";
import { FindTheBestTalents } from "../cmps/FindTheBestTalent.jsx";
import {SuccessStories} from "../cmps/SuccesStories.jsx"

export function HomePage(){
    return(
        <div>
            <div className="brighter center">
            <FindTheBestTalents/>
            </div>
            <div className="darker center">
              <BuildAndManage/>
            </div>
            <div className="brighter center">
               <SuccessStories />
            </div>
        </div>
    )
}

