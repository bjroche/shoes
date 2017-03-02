const express = require('express');
//const nr = require('@newrelic/beta-agent')  
const hbs = require('hbs');
const fs = require('fs');
const lbsText = require('./scarpa_const.js');
const port = process.env.PORT || 3000;
var ourlang ='en';
var app = express();



hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  //app.locals.nreum = newrelic.getBrowserTimingHeader();
  //console.log(log);
  //fs.appendFileSync('server.log', log + '\n');
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    welcomeMessage: lbsText.getWelcome(ourlang),
    homePara1: lbsText.gethomePara1(ourlang),
    homePara2: lbsText.gethomePara2(ourlang),
    homePara3: lbsText.gethomePara3(ourlang),
    homePara4: lbsText.gethomePara4(ourlang),
    pageLang: ourlang
  });
});

app.get('/mens', (req, res) => {
  var query = req.query;
  console.log(req.body)
    welcomeMessage: lbsText.getWelcome();

  console.log(lbsText.welcomeMessage);
  console.log(query);
    res.render('mens.hbs', {
    //pageTitle: 'About Page'
  });
});

app.get('/ladies', (req, res) => {
  res.render('ladies.hbs', {
    //pageTitle: 'About Page'
  });
});


app.get('/sale', (req, res) => {
  res.render('sale.hbs', {
    //pageTitle: 'About Page'
  });
});



app.get('/about', (req, res) => {
  res.render('about.hbs', {
    //pageTitle: 'About Page'
  });
});

app.get('/en', (req, res) => {
  ourlang='en',
  res.render('home.hbs', {
    welcomeMessage: lbsText.getWelcome(ourlang),
    homePara1: lbsText.gethomePara1(ourlang),
    homePara2: lbsText.gethomePara2(ourlang),
    homePara3: lbsText.gethomePara3(ourlang),
    homePara4: lbsText.gethomePara4(ourlang),
    pageLang: ourlang
  });

});

app.get('/it', (req, res) => {
  ourlang='it',
  res.render('home.hbs', {
    welcomeMessage: lbsText.getWelcome(ourlang),
    homePara1: lbsText.gethomePara1(ourlang),
    homePara2: lbsText.gethomePara2(ourlang),
    homePara3: lbsText.gethomePara3(ourlang),
    homePara4: lbsText.gethomePara4(ourlang),
    pageLang: ourlang
  });

});



app.get('/services', (req, res) => {
  res.render('services.hbs', {
  //  pageTitle: 'Projectk'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
