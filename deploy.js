const ghpages = require('gh-pages');

ghpages.publish('build', {
  repo: 'https://github.com/krishpitroda1/photography.git',
  branch: 'gh-pages',
}, function(err) {
  if (err) {
    console.error('🚨 Deployment error:', err);
  } else {
    console.log('✅ Deployment successful!');
  }
});
