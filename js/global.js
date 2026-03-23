console.log("connected: global.js")

// user info
let userFirst = "Aya";
let userLast = "Aubergine";
let userRole = "Business Development Representative"
let statSkill = 0;
let statLead = 0;

// user stats
const statADisplay = document.getElementById("statA");
const statBDisplay = document.getElementById("statB");

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const contactName = document.getElementById("contactName");
const contactList = document.getElementById("contactList");

// Update stats
function updateStats() {
  statADisplay.textContent = statA;
  statBDisplay.textContent = statB;
}

