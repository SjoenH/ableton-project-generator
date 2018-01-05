#!/usr/bin/env node

const path = require("path");
const program = require("commander");
const inquirer = require("inquirer");
const pkg = require("../package.json");
const {
    readConfiguration,
    createProjectTemplate,
    generateProjectFromTemplate
} = require("../index");

program.version(pkg.version).description(pkg.description);

program
    .command("test")
    .alias("t")
    .action(() => console.log("test ...."));

program
    .command("info")
    .alias("i")
    .description("Get all information about the current project setup")
    .action(() => {
        console.log("Bundle info: ");
    });

program
    .command("run <command>")
    .alias("r")
    .description("Run a script <command> inside the current Ableton Project")
    .action(command => {
        console.log("Run script %s", command);
    });

program.parse(process.argv);
