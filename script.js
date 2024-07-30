document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const commandInput = document.getElementById('commandInput');

    const asciiArt = `
    ___                                                                  _
   /__/|__                                                            __//|
   |__|/_/|__                                                       _/_|_||
   |_|___|/_/|__                                                 __/_|___||
   |___|____|/_/|__                                           __/_|____|_||
   |_|___|_____|/_/|_________________________________________/_|_____|___||
   |___|___|__|___|/__/___/___/___/___/___/___/___/___/___/_|_____|____|_||
   |_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___||
   |___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|_||
   |_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|/
          
   Welcome to my terminal portfolio. Version 1.0.0.
   Type 'help' to see the available commands.
    `;
    
   
    const commands = {
        help: () => {
            return `Available commands:

            /info - Display information about me
            /projects - List all my projects
            /education - About my studies
            /clear - Clear the terminal
            /reset - Reset the terminal
            /github - Visit my account
            `;
        },

        info: () => {
            return `About me:
            Full Stack Developer oriented on back-end development, with experience in projects using Node.js 
            and Java, as well as working with both relational and non-relational databases.`;
        },

        projects: () => {
            return `Projects:
            1. Pokematch API - This project allows you to experience the fun of memory games while diving 
            into the exciting world of Pokémon. Test your matching skills as you try to find pairs of your 
            favorite Pokémon.
            2. Movie Archive backend - This project is a backend application developed in Java using Servlet, 
            Apache Tomcat and MySQL. The purpose of the project is to provide an API for managing movies, 
            including CRUD operations with Postman.

            Type 'go pokematch' or 'go movie archive' to navigate to the respective project.`;;
        },

        education: () => {
            return `Education: 
            I am currently studying at IFTS N°11, where I am pursuing a program that covers various aspects 
            of software development and programming. My coursework includes subjects related to databases, 
            backend development, and modern web technologies. I am particularly focused on expanding my 
            knowledge in SQL, Java, and web development frameworks.

            My studies aim to enhance my skills as a full-stack developer and prepare me for real-world 
            programming challenges. Through hands-on projects and practical applications, I am working 
            towards becoming proficient in both frontend and backend development, with a strong emphasis on 
            database management and server-side technologies.`;
        },

        clear: () => {
            output.innerHTML = '';
            return '';
        },
        
        reset: () => {
            window.location.reload();
        },

        github: () => {
            return `Github: 
            https://github.com/ayalamarcelo`;
        },

        ascii: () => {
            return asciiArt;
        }
    };

    const navigateToProject = (project) => {
        console.log(`Navigating to project: ${project}`);
        switch (project.toLowerCase()) {
            case 'pokematch':
                window.location.href = 'https://github.com/ayalamarcelo/pokematch';
                break;
            case 'movie archive':
                window.location.href = 'https://github.com/ayalamarcelo/backend';
                break;
            default:
                return `Command not found: go ${project}`;
        }
    };

    const executeCommand = (command) => {
        const [cmd, ...args] = command.trim().split(' ');
        if (cmd === 'go') {
            return navigateToProject(args.join(' '));
        }
        const func = commands[cmd] || (() => `Command not found: ${cmd}`);
        return func(...args);
    };

    const printOutput = (text) => {
        const p = document.createElement('pre');
        p.textContent = text;
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
    };

    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = commandInput.value;
            printOutput(`> ${command}`);
            const result = executeCommand(command);
            if (result) {
                printOutput(result);
            }
            commandInput.value = '';
        }
    });

    printOutput(commands.ascii());
    printOutput(commands.help());
});
