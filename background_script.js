var standupNotification = 'standup-notification';

var WAIT_INTERVAL = 60;

browser.alarms.create('', { periodInMinutes: WAIT_INTERVAL });

function getRandom() {
  var quotes = [
    'Show Me your moves',
    'Time to get out of the Matrix',
    'You can leave to matrix to run on its own for sometime',
    'Time to live a healthy life',
    'Time for the hourly break from code'
  ];

  return quotes[Math.floor(Math.random() * Math.floor(quotes.length))];
}

browser.alarms.onAlarm.addListener(function(alarm) {
  browser.notifications.create(standupNotification, {
    type: 'basic',
    iconUrl: browser.extension.getURL('icons/icon.png'),
    title: 'Time to Standup',
    message: getRandom()
  });
});

browser.browserAction.onClicked.addListener(() => {
  var clearing = browser.notifications.clear(standupNotification);
  clearing.then(() => {
    console.log('cleared');
  });
});
