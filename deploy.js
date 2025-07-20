const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(__dirname, 'build'),
  {
    repo: 'https://github.com/krishpitroda1/photography.git',
    branch: 'gh-pages',
    dotfiles: true,
    message: 'Deploy from Windows using gh-pages programmatic API',
    user: {
      name: 'krishpitroda1',
      email: 'krishpitroda09@gmail.com' // replace with your GitHub email
    }
  },
  function (err) {
    if (err) {
      console.error('🚨 Deployment error:', err);
    } else {
      console.log('✅ Deployment successful!');
    }
  }
);
