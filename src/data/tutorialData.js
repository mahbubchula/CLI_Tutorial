export const tutorialSteps = [
  {
    id: 1,
    title: "Welcome & Basics",
    content: "Welcome to the CLI Tutorial! The command line is a powerful tool. Let's start by seeing where we are. The 'pwd' command stands for 'Print Working Directory'.",
    command: "pwd",
    expectedOutput: "/users/mahbu/projects",
    hint: "Type 'pwd' and press Enter."
  },
  {
    id: 2,
    title: "Listing Files",
    content: "Great! Now let's see what files are in this directory. The 'ls' command lists files and folders.",
    command: "ls",
    expectedOutput: "Documents  Downloads  Music  my-project",
    hint: "Type 'ls' to see your files."
  },
  {
    id: 3,
    title: "Creating Directories",
    content: "Let's organize our work. We use 'mkdir' (Make Directory) to create new folders. Let's make a folder named 'website'.",
    command: "mkdir website",
    expectedOutput: "Created directory: website",
    hint: "Type 'mkdir website'."
  },
  {
    id: 4,
    title: "Changing Directories",
    content: "Now, let's move into our new folder. 'cd' stands for 'Change Directory'.",
    command: "cd website",
    expectedOutput: "/users/mahbu/projects/website",
    hint: "Type 'cd website'."
  },
  {
    id: 5,
    title: "Git Initialization",
    content: "Time to version control our project. Git helps track changes. Initialize a new git repository here.",
    command: "git init",
    expectedOutput: "Initialized empty Git repository in /users/mahbu/projects/website/.git/",
    hint: "Type 'git init'."
  },
  {
    id: 6,
    title: "Checking Status",
    content: "Let's check the status of our git repository. It will tell us if there are changes to commit.",
    command: "git status",
    expectedOutput: "On branch master\nNo commits yet\n\nnothing to commit",
    hint: "Type 'git status'."
  },
  {
    id: 7,
    title: "Opening VS Code",
    content: "You can open Visual Studio Code directly from the terminal! The command is 'code', followed by the location ('.' for current directory).",
    command: "code .",
    expectedOutput: "Opening Visual Studio Code...",
        hint: "Type 'code .'"
      }
    ];
    