console.log("connected: ts.js")

// Task Manager
document.getElementById("taskFirstName").innerText = userFirst;

// CRM

// Messages
/*
document.getElementById("sendMessageBtn").addEventListener("click", () => {
  statA++;
  statB++;
  updateStats();
  alert("Message sent (simulation).");
});
*/

// Email Outreach Modal
const emailOptions = {
  A: [
    "Quick question about your charting workflow",
    "Re: Medical Documentation",
    "Improve Your EHR Today!",
    "Opportunity for Synergy",
    "Important Message for Your Team"
  ],
  B: [
    "documentation accuracy becomes even more critical as your team scales clinical operations",
    "we sell charting software to companies like yours",
    "I noticed you work in healthcare",
    "everyone is upgrading their documentation tools",
    "we recently launched a new feature"
  ],
  C: [
    "documentation time can take providers away from patient care",
    "charting software is outdated",
    "manual processes are inefficient",
    "compliance can be frustrating",
    "most teams want better tools"
  ],
  D: [
    "reduce documentation burden without disrupting existing workflows",
    "modernize charting with advanced technology",
    "digitize clinical notes quickly",
    "increase organizational efficiency",
    "implement a powerful platform"
  ],
  E: [
    "explore whether this is relevant for your team",
    "schedule a 30-minute demo",
    "see a full product walkthrough",
    "discuss purchasing options",
    "talk about next steps"
  ]
};

const selectorContainer = document.getElementById("optionSelectors");

// Email Outreach Modal - Option buttons
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

