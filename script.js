document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    const commandInput = document.getElementById('commandInput');

    const asciiArt = `
     ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
     ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
     ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
     ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
     ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
     ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
                To my portfolio
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
            Backend Developer
            Creative and determined programmer with experience in various technologies including Node.js, 
            Django, and Java Spring Boot.`;
        },

        projects: () => {
            return `Projects:
            1. Task Management API - A comprehensive task management API built with Node.js and MongoDB.
            2. Library Management System - An API for managing library books, authors, and categories, 
            implemented with Django and PostgreSQL.
            3. Reservation System - A reservation system API developed using Spring Boot and MySQL.`;
        },

        education: () => {
            return `Education: 
            I am currently studying at IFTS N°11, where I am pursuing a program that covers various aspects of software 
            development and programming. My coursework includes subjects related to databases, backend development, and 
            modern web technologies. I am particularly focused on expanding my knowledge in SQL, Java, and web development 
            frameworks.

            My studies aim to enhance my skills as a full-stack developer and prepare me for real-world programming challenges. 
            Through hands-on projects and practical applications, I am working towards becoming proficient in both frontend and 
            backend development, with a strong emphasis on database management and server-side technologies.`;
        },

        clear: () => {
            output.innerHTML = '';
            return '';
        },
        
        reset: () => {
            window.location.reload();
        },

        github: () => {
            return `
            https://github.com/ayalamarcelo`;
        },

        ascii: () => {
            return asciiArt;
        }
    };

    const executeCommand = (command) => {
        const [cmd, ...args] = command.trim().split(' ');
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
            printOutput(executeCommand(command));
            commandInput.value = '';
        }
    });


    printOutput(commands.ascii());
    printOutput(commands.help());
});
