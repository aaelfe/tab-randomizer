async function queryTabs() {
  return chrome.tabs.query({windowType:'normal', currentWindow: true}).then(tabs=>tabs)
}

let tabs

function moveTabToRandomIndex(tabIndex) {
  let index=Math.floor(Math.random()*(tabs.length-1))
  chrome.tabs.move(
    tabs[tabIndex].id,
    {'index': index},
  )
}

function rearrangeTabs() {
  for(let i=0; i<tabs.length; i++) {
    moveTabToRandomIndex(i)
  }
}

chrome.alarms.create({periodInMinutes: 5})

chrome.alarms.onAlarm.addListener(() => {
  queryTabs().then((t) => tabs=t)
  rearrangeTabs()
})