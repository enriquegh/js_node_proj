var webdriver = require('selenium-webdriver'),
    username = "enriqueci",
    accessKey = "ebf6fd4b-d68e-4939-a307-7cabb0bd5053",
    driver;

driver = new webdriver.Builder().
  withCapabilities({
    'browserName': 'chrome',
    'platform': 'Windows XP',
    'version': '43.0',
    'username': username,
    'accessKey': accessKey
  }).
  usingServer("https://" + username + ":" + accessKey +
              "@ondemand.saucelabs.com:443/wd/hub").
  build();

driver.getSession().then(function (session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=SLtest2');
 });

driver.get('http://saucelabs.com/test/guinea-pig');

driver.getTitle().then(function (title) {
    console.log("title is: " + title);
});

driver.quit();
