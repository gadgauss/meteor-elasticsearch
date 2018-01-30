Package.describe({
  name: 'hahihula:elasticsearch',
  version: '0.0.5',
  summary: 'Wraps the ElasticSearch NPM package and provides helper functions.',
  git: 'https://github.com/gadgauss/meteor-elasticsearch.git',
  documentation: 'README.md'
});

Npm.depends({
  "elasticsearch": "14.0.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore');
  api.use('alanning:update-helpers@0.0.1');
  api.use('meteorhacks:async@1.0.0');
  api.export('ElasticSearch', 'server');
  api.addFiles('elasticsearch.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('random');
  api.use('underscore');
  api.use('meteorhacks:async');
  api.use('alanning:elasticsearch');
  api.addFiles('elasticsearch-tests.js', 'server');
});
