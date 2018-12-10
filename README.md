# Omnia Cli Templates
Serves the project and item templates for Omnia Cli

omnia dev new -i 0.1.0 -f
omnia dev new extension -n web=My.Test
omnia dev new worker -n My.Test.Worker

Installed template pack for version 0.1.0

| Type    | Name             | Tokens  | Required | Description                                 |
|---------|------------------|---------|----------|---------------------------------------------|
| Project | extension        |         | -n       | Omnia Extension solution                    |
| Project | web              |         | -n       | Omnia web project                           |
| Project | worker           |         | -n       | Omnia worker project                        |
| Item    | vuewebcomponent  | element | -n -t    | Vue based web component                     |
| Item    | vuespfxcomponent | element | -n -t    | Vue spfx component                          |
| Item    | vuesubcomponent  |         | -n       | Vue based sub component                     |
| Item    | manifest         |         | -n       | Manifest definition                         |
| Item    | store            |         | -n       | Store module for state management           |
| Item    | unittest         |         | -n       | Unit test for client testing                |
| Item    | gitignore        |         |          | Gitignore file for git versioning           |
| Item    | vscodesetup      |         |          | Configure VS Code for extension development |
| Item    | vscodetddsetup   |         |          | Configure project for TDD                   |
