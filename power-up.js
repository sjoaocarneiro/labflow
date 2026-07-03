window.TrelloPowerUp.initialize({
  'card-buttons': function (t, options) {
    return [{
      text: 'LabFlow',
      callback: function (t) {
        return t.popup({
          title: 'LabFlow',
          url: './index.html'
        });
      }
    }];
  }
});
