async function queryTabs() {
  return chrome.tabs.query({windowType:'normal', currentWindow: true}).then(tabs=>tabs)
}

let tabs
let tabIds=[]
queryTabs()
  .then((t) => tabs=t)

chrome.alarms.create({periodInMinutes: 0.001})

chrome.alarms.onAlarm.addListener(() => {
  moveRandomTab()
})

function moveRandomTab() {
  let tabId=Math.floor(Math.random()*(tabs.length-1))
  let index=Math.floor(Math.random()*(tabs.length-1))
  chrome.tabs.move(
    tabs[tabId].id,
    {'index': index},
  )
}