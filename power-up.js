window.TrelloPowerUp.initialize({
  "card-buttons": function (t) {
    return [
      {
        text: "LabFlow",
        callback: function (t) {
          return t.modal({
            title: "LabFlow",
            url: "pages/home.html",
            fullscreen: true
          });
        }
      }
    ];
  }
});
