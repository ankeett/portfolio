// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!', 'Namaskar'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function loadMessages() {
    fetch('/list-message.html').then(response => response.json()).then((messages) => {
      const messageListElement = document.getElementById('message-list');
      messages.forEach((message) => {
        messageListElement.appendChild(createTaskElement(message));
      })
    });
}


let getProjects = function(){
    return{
        "Project":[
            {
                "Title": "VC8000",
                "img": "./images/VC8000.png",
                "Description": "This project consists of an assembler and emulator for the VC8000 computer. An assembler is a program that translates a program written in assembly language (symbolic machine language) into machine language. An emulator is a program that imitates a specified machine. So, if you give it a machine language program for that machine, it will be able to run it.",
                "Tags": "C++",
                "Link": "https://github.com/ankeett/VC8000",
            },
            {
                
                "Title": "VC8000",
                "img": "./images/VC8000.png",
                "Description": "This project consists of an assembler and emulator for the VC8000 computer. An assembler is a program that translates a program written in assembly language (symbolic machine language) into machine language. An emulator is a program that imitates a specified machine. So, if you give it a machine language program for that machine, it will be able to run it.",
                "Tags": "C++",
                "Link": "https://github.com/ankeett/VC8000",
            }
        ]
    }
};

const Projects = getProjects();
function refreshProjects(){
    for(let i = 0; i < Projects.Project.length;i++){
        const div = document.getElementById("div");
        const smallDiv = document.createElement('div');
        smallDiv.classList.add("card");
        div.append(smallDiv);

        const image = document.createElement('img');
        image.src = Projects.Project[i].img;
        smallDiv.append(image);

        const title = document.createElement('h4');
        smallDiv.append(title);
        title.innerText =Projects.Project[i].Title
        
        const description = document.createElement('p');
        smallDiv.append(description);
        description.innerText = Projects.Project[i].Description;

        const tags = document.createElement('h5');
        smallDiv.append(tags);
        tags.innerText = Projects.Project[i].Tags;


        const link = document.createElement('a')
        link.classList.add('btn-link');
        const text = document.createTextNode("Link")
        smallDiv.append(link);
        link.append(text)
        link.title= text;
        link.href = Projects.Project[i].Link;

    }
}


{/* <div class="card">
          <img src="./images/VC8000.png" alt="Assembler" width="100%">
          <h4>VC8000 Assembler</h4>

          <p>This project consists of an assembler and emulator for the VC8000 computer.  
            An assembler is a program that translates a program written in assembly language (symbolic machine language) into machine language.
            
            An emulator is a program that imitates a specified machine.  So, if you give it a machine language program for that machine, it will be able to run it.
          </p>

          <h5>C++</h5>

            <a href="https://github.com/ankeett/VC8000" class="btn-link">Link</a>
</div> */}