import ready from "../../js/utils/documentReady.js";

ready(function () {
  const contactsForm = document.querySelector("#contacts-form");
  const feedbackForm = document.querySelector("#feedback-form");

  if (contactsForm) {
    const userNameField = contactsForm.querySelector("[name='contacts-name']");
    const userEmailField = contactsForm.querySelector("[name='contacts-email']");
    const userPhoneField = contactsForm.querySelector("[name='contacts-phone']");
    const userCategoryField = contactsForm.querySelector("[name='contacts-category']");
    const formButton = contactsForm.querySelector("button");

    userNameField.addEventListener("input", () => {
      contactsFormCheck(contactsForm, formButton);
    });

    userEmailField.addEventListener("input", () => {
      contactsFormCheck(contactsForm, formButton);
    });

    userPhoneField.addEventListener("change", () => {
      contactsFormCheck(contactsForm, formButton);
    });

    userCategoryField.addEventListener("change", () => {
      contactsFormCheck(contactsForm, formButton);
    });
  }

  if (feedbackForm) {
    const userNameField = feedbackForm.querySelector("[name='feedback-name']");
    const userPhoneField = feedbackForm.querySelector("[name='feedback-phone']");
    const userEmailField = feedbackForm.querySelector("[name='feedback-email']");
    const formButton = feedbackForm.querySelector("button");

    userNameField.addEventListener("input", () => {
      feedbackFormCheck(feedbackForm, formButton);
    });

    userPhoneField.addEventListener("input", () => {
      feedbackFormCheck(feedbackForm, formButton);
    });

    userEmailField.addEventListener("input", () => {
      feedbackFormCheck(feedbackForm, formButton);
    });
  }
});

const regExpEmail = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

function contactsFormCheck(form, submit) {
  const userNameValue = form.querySelector("[name='contacts-name']").value;
  const userEmailValue = form.querySelector("[name='contacts-email']").value;
  const userPhoneValue = form.querySelector("[name='contacts-phone']").value;
  const userCategoryValue = form.querySelector("[name='contacts-category']").value;

  const isEmailCorrect = regExpEmail.test(userEmailValue);

  const noEmptyValues =
    !!userNameValue &&
    !!isEmailCorrect &&
    userPhoneValue.length >= 12 &&
    userCategoryValue !== "Выберите категорию бизнеса";

  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}

function feedbackFormCheck(form, submit) {
  const userNameValue = form.querySelector("[name='feedback-name']").value;
  const userPhoneValue = form.querySelector("[name='feedback-phone']").value;
  const userEmailValue = form.querySelector("[name='feedback-email']").value;

  const isEmailCorrect = regExpEmail.test(userEmailValue);
  const noEmptyValues = !!userNameValue && userPhoneValue.length >= 12 && isEmailCorrect;

  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}
