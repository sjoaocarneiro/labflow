window.TrelloPowerUp.initialize({
  "card-buttons": function (t) {
    return [
      {
        text: "LabFlow",
        callback: function (t) {
          return t.modal({
            title: "Assinatura",
            url: "pages/signature.html",
            fullscreen: true
          });
        }
      }
    ];
  }
});
