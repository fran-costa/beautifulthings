function setNotifications() {
  const _showAddScreen = () => window.location.hash = '/add';
  const notification = {
    title: 'BeautifulThingsApp',
    text: 'What\'s your beautiful thing today?',
    smallIcon: null,
    icon: 'res://icon',
    vibrate: true,
    foreground: true,
    every: {
      hour: 22,
      minute: 0,
    }
  }

  clearNotifications();
  window.cordova.plugins.notification.local.schedule(notification);
  window.cordova.plugins.notification.local.on('click', _showAddScreen);
}

function clearNotifications() {
  window.cordova.plugins.notification.local.cancelAll();
}

export { setNotifications, clearNotifications }
