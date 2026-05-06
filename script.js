const menuToggle = document.querySelector(".menu-toggle");
const headerNav = document.querySelector(".header-nav");

if (menuToggle && headerNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const tabs = document.querySelectorAll(".module-tab");
const panels = document.querySelectorAll(".module-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.panel === target;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const answer = item?.querySelector(".faq-answer");

    if (!item || !answer) {
      return;
    }

    const isOpen = item.classList.contains("is-open");

    faqQuestions.forEach((otherQuestion) => {
      const otherItem = otherQuestion.closest(".faq-item");
      const otherAnswer = otherItem?.querySelector(".faq-answer");

      if (!otherItem || !otherAnswer) {
        return;
      }

      otherItem.classList.remove("is-open");
      otherQuestion.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;
    }
  });
});
