$.post('https://mailthis.to/test@example.com', {
  email: 'foo@bar.co',
  _subject: 'hi!',
  message: 'Test'
}).then(function () {
  location.href = 'https://mailthis.to/confirm'
});