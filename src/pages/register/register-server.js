module.exports = {
  basepath: 'register',
  actions: [
    {
      path: '/',
      get: function renderDashboard(req, res) {
        res.send('Hello Register!');
      }
    }
  ]
}
