import React from "react";

export default function Presentation(){
    return (
        <section id="present" className="bg-gradient-to-r container mx-auto flex flex-col justify-center items-center">
            <div className="flex flex-row h-screen justify-center items-center container mx-auto flex">
                <div className="container mx-auto flex-grow w-1/2 md:items-start md:text-left items-center">
                    <h1 className="w-full text-center text-texto title-font text-4xl my-30 font-medium uppercase font-GothicA1 tracking-[2px]">I am Ana Maria Christache</h1>
                    <h3 className="w-full text-center text-texto text-2xl font-Oswald tracking-[6px]">Student of INFORMATION TECHNOLOGY in UPV</h3>
                    <div className="text-2xl text-center py-4">
                        <span className="px-4">
                            <a href="https://www.google.es/" title="Linkedin" target="_blank" rel="noopener noreferrer"><i class="cp cp-linkedin"></i></a>
                        </span>
                        <span className="px-4">
                            <a href="https://www.google.es/" title="Twitter" target="_blank" rel="noopener noreferrer"><i class="cp cp-twitter"></i></a>
                        </span>
                        <span className="px-4">
                            <a href="https://www.google.es/" title="Github" target="_blank" rel="noopener noreferrer"><i class="cp cp-github"></i></a>
                        </span>
                        <span className="px-4">
                            <a href="https://www.google.es/" title="Email" target="_blank" rel="noopener noreferrer"><i class="cp cp-envelope"></i></a>
                        </span>
                    </div>
                </div>
            </div>
              
        </section>
      );
    
}