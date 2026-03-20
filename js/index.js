let userFirst = "";
let userLast = "";
let statSkill = 0;
let statLead = 0;

// Stats
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

// Task Manager
document.getElementById("addTaskBtn").addEventListener("click", () => {
  if (!taskInput.value.trim()) return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";

  li.textContent = taskInput.value;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✓";
  doneBtn.className = "btn btn-sm btn-outline-success";

  doneBtn.addEventListener("click", () => {
    li.remove();
    statA++; // completed task increases Stat A
    updateStats();
  });

  li.appendChild(doneBtn);
  taskList.appendChild(li);

  taskInput.value = "";
});

// CRM
document.getElementById("addContactBtn").addEventListener("click", () => {
  if (!contactName.value.trim()) return;

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = contactName.value;

  contactList.appendChild(li);

  statB++; // adding contact increases Stat B
  updateStats();

  contactName.value = "";
});

// Messages
document.getElementById("sendMessageBtn").addEventListener("click", () => {
  statA++;
  statB++;
  updateStats();
  alert("Message sent (simulation).");
});


const emailOptions = {
  blank1: [
    "Quick question about your charting workflow",
    "Re: Medical Documentation",
    "Improve Your EHR Today!",
    "Opportunity for Synergy",
    "Important Message for Your Team"
  ],
  blank2: [
    "your team is scaling clinical operations and documentation accuracy becomes even more critical",
    "we sell charting software to companies like yours",
    "I noticed you work in healthcare",
    "everyone is upgrading their documentation tools",
    "we recently launched a new feature"
  ],
  blank3: [
    "documentation time can take providers away from patient care",
    "charting software is outdated",
    "manual processes are inefficient",
    "compliance can be frustrating",
    "most teams want better tools"
  ],
  blank4: [
    "reduce documentation burden without disrupting existing workflows",
    "modernize charting with advanced technology",
    "digitize clinical notes quickly",
    "increase organizational efficiency",
    "implement a powerful platform"
  ],
  blank5: [
    "explore whether this is relevant for your team",
    "schedule a 30-minute demo",
    "see a full product walkthrough",
    "discuss purchasing options",
    "talk about next steps"
  ]
};

const selectorContainer = document.getElementById("optionSelectors");

// Render option buttons
Object.keys(emailOptions).forEach((blankKey) => {
  const section = document.createElement("div");
  section.className = "mb-3";

  const title = document.createElement("h3");
  title.className = "h6";
  title.textContent = `Options for ${blankKey.toUpperCase()}`;

  section.appendChild(title);

  emailOptions[blankKey].forEach((optionText) => {
    const button = document.createElement("button");
    button.className = "btn btn-outline-primary btn-sm me-2 mb-2";
    button.type = "button";
    button.textContent = optionText;

    button.addEventListener("click", () => {
      const blankSpan = document.getElementById(blankKey);
      blankSpan.textContent = optionText;
      blankSpan.classList.add("text-success", "fw-semibold");
    });

    section.appendChild(button);
  });

  selectorContainer.appendChild(section);
});