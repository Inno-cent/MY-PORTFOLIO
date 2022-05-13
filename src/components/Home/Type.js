import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "SOFTWARE ENGINEER",
          "FRONT-END DEVELOPER",
          "DEVOPS ENGINEER",
          "BLOCKCHAIN DEVELOPER"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
