// M - 1
// function start(){
//     chrome.tabs.onUpdated.addListener(({tabId, changeInfo, tab}) => {
//         console.log(changeInfo);
//         chrome.tabs.detectLanguage(
//             tabId,(language)=>{
//                 console.log(language);
//             }
//           )
//         chrome.tabs.insertCSS(tabId,{
//             file:"bugify.css"
//         },()=>{console.log("Bugify Active")})
//     });
// }
// function end(){
//     chrome.tabs.onUpdated.addListener(({tabId, changeInfo, tab}) => {
//         console.log(changeInfo);
//         chrome.tabs.insertCSS(tabId,{
//             file:"nonBugify.css"
//         },()=>{console.log("Bugify Deactive")})
//     });
// }

// M - 2
function start(){
    chrome.tabs.executeScript(null, {
        code: chrome.tabs.insertCSS(null,{
            file:"bugify.css"
        },()=>{console.log("Bugify Active")})
    });
}
function end(){
    chrome.tabs.executeScript(null, {
        code: chrome.tabs.removeCSS(null,{
            file:"bugify.css"
        },()=>{console.log("Bugify Active")})
    });
}

var count=0;
chrome.browserAction.onClicked.addListener(function(tab) {
    count++;
    if(count%2!=0){
        start();
    }else{
        end();
        // chrome.runtime.reload();
    }
});
// chrome.tabs.onSelectionChanged.addListener(({tabId,selectInfo})=>{
//     chrome.tabs.removeCSS(tabId,{
//         file:"style.css"
//     },()=>{console.log("Bugify Deactive")})
// })
