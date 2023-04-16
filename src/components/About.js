import React from "react";
import Img from "./images/placeholder.png";

export default function About(){
    return (
      
        <section id="about">
              <div className="bg-fondi px-60 py-20">
                <h2 className="font-Oswald uppercase tracking-[3px] text-2xl"><i class="cp cp-info"></i>  About me</h2>
                  <div className="h/2 container mx-auto flex">
                    <span className="w-1/3 flex flex-col flex-auto py-5 px-10"><img src={Img} width={300} height={500}></img></span>
                    <p className="w-2/3 text-justify flex flex-col flex-auto py-5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      <br></br>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>
                    </div>
              </div>
        </section>
      );
}