const DAILY_NOTIFICATION_ID = 1;
const WEEKLY_NOTIFICATION_ID = 2;

function setNotifications(daily = true) {
  const _showAddScreen = () => window.location.hash = '/add';
  const notification = {
    id: DAILY_NOTIFICATION_ID,
    title: 'BeautifulThingsApp',
    text: 'What\'s your beautiful thing today?',
    smallIcon: null,
    icon: 'res://icon',
    vibrate: true,
    foreground: true,
    every: {
      hour: 22,
      minute: 0,
    },
  }

  if (!daily) {
    notification['id'] = WEEKLY_NOTIFICATION_ID;
    notification['every'] = {
      hour: 22,
      minute: 0,
      weekday: 7, // 7 == Sunday
    }
  }

  clearNotifications();
  window.cordova.plugins.notification.local.schedule(notification);
  window.cordova.plugins.notification.local.on('click', _showAddScreen);
}

function clearNotifications() {
  window.cordova.plugins.notification.local.cancelAll();
}

function isDailyScheduled() {
  const isDaily = notificationsIdsArray => {
    return (notificationsIdsArray.length && notificationsIdsArray[0] == DAILY_NOTIFICATION_ID);
  }

  window.cordova.plugins.notification.local.getIds(isDaily);
}

export { setNotifications, clearNotifications, isDailyScheduled }
