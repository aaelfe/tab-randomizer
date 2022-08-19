chrome.alarms.create({periodInMinutes: 0.001})

chrome.alarms.onAlarm.addListener(() => {
  console.log('ALARM')
})