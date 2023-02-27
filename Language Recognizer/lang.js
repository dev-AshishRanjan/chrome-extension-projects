var languageVar;

// M-1
// chrome.tabs.onUpdated.addListener(({tabId, changeInfo, tab}) => {
//     console.log(changeInfo);
//     chrome.tabs.detectLanguage(
//         tabId,(language)=>{
//             languageVar=language;
//             document.querySelector('p').innerHTML=`${language.toUpperCase()}`;
//             console.log(language);
//         }
//     )
// });


// m-2
// chrome.tabs.onActivated.addListener(({tabId, changeInfo, tab}) => {
//     console.log(changeInfo);
//     chrome.tabs.detectLanguage(
//         tabId,(language)=>{
//             languageVar=language;
//             document.querySelector('p').innerHTML=`${language.toUpperCase()}`;
//             console.log(language);
//         }
//     )
// });


// m-3
chrome.tabs.executeScript(null, {
    code: chrome.tabs.detectLanguage(
        null,(language)=>{
            languageVar=language;
            document.querySelector('p').innerHTML=`${language.toUpperCase()}`;
            console.log(language);
        }
    )
});