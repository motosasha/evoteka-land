import ready from "../../js/utils/documentReady.js";

ready(function () {
  const contactsForm = document.querySelector("#contacts-form");
  const feedbackForm = document.querySelector("#feedback-form");

  if (contactsForm) {
    const userNameField = contactsForm.querySelector("[name='contacts-name']");
    const userContactField = contactsForm.querySelector("[name='contacts-contact']");
    const userPlaceField = contactsForm.querySelector("[name='contacts-place']");
    const userCategoryField = contactsForm.querySelector("[name='contacts-category']");
    const formButton = contactsForm.querySelector("button");

    userNameField.addEventListener("input", () => {
      contactsFormCheck(contactsForm, formButton);
    });

    userContactField.addEventListener("input", () => {
      contactsFormCheck(contactsForm, formButton);
    });

    userPlaceField.addEventListener("change", () => {
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

const regExp = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g;

function contactsFormCheck(form, submit) {
  const userNameValue = form.querySelector("[name='contacts-name']").value;
  const userContactValue = form.querySelector("[name='contacts-contact']").value;
  const userPlaceValue = form.querySelector("[name='contacts-place']").value;
  const userCategoryValue = form.querySelector("[name='contacts-category']").value;

  const noEmptyValues =
    !!userNameValue &&
    !!userContactValue &&
    userPlaceValue !== "Выберите должность" &&
    userCategoryValue !== "Выберите категорию бизнеса";

  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}

function feedbackFormCheck(form, submit) {
  const userNameValue = form.querySelector("[name='feedback-name']").value;
  const userPhoneValue = form.querySelector("[name='feedback-phone']").value;
  const userEmailValue = form.querySelector("[name='feedback-email']").value;

  const isPhoneCorrect = regExp.test(userEmailValue);
  const noEmptyValues = !!userNameValue && userPhoneValue.length >= 12 && isPhoneCorrect;

  noEmptyValues ? submit.removeAttribute("disabled") : submit.setAttribute("disabled", "true");
}
