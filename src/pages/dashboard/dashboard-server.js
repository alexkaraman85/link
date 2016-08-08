module.exports = {
  basepath: 'dashboard',
  actions: [
    {
      path: '/',
      get: function renderRegister(req, res) {
        res.render('dashboard/dashboard', {
          data1: 'test data',
          data2: 'test data 2'
        });
      }
    }
  ]
}
