// import express from 'express';
// import webpack from 'webpack';
// import path from 'path';
// import config from '../webpack.config.dev';
// import open from 'open';
// import favicon from 'serve-favicon';
//
// /* eslint-disable no-console */
//
// const app = express();
// const compiler = webpack(config);
var express = require('express');
var webpack = require('webpack');
const path = require('path');
// var config = require('../webpack.config.js');
var app = express();
// var compiler = webpack();
var server_port = process.env.PORT || 8080;
var server_ip_address = process.env.IP || '0.0.0.0';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));
// app.use(favicon(path.join(__dirname,'assets','public','favicon.ico')));
//
// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });

app.listen(server_port, server_ip_address, function(err) {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
