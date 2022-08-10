(() => {
  const injectTranslatorElement = () => {
    const translator = document.createElement("div");
    translator.id = "translator";
    document.body.appendChild(translator);
  };

  const bindTranslatorAction = () => {
    document.onmouseup = (e) => {
      window.translator.translateSelection();
    };
  };

  const init = () => {
    injectTranslatorElement();
    bindTranslatorAction();
  };

  init();
})();
