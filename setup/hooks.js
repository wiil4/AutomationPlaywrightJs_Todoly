/**************************************************/

/**  
* @author Rajat Verma
* https://www.linkedin.com/in/rajat-v-3b0685128/
* https://github.com/rajatt95
* https://rajatt95.github.io/ 
*  
* Course: Automated Software Testing with Playwright (https://www.udemy.com/course/automated-software-testing-with-playwright/)
* Tutor: Kaniel Outis (https://www.udemy.com/user/shinoku911/)
*/

/**************************************************/

const playwright = require('playwright')
const { Before, After, BeforeAll, AfterAll } = require('@cucumber/cucumber')
const fs = require('fs');

// To launch the browser before all the scenarios
BeforeAll(async () => {
    console.log('Launch Browser')
    // Giving browser- Chromium and headed mode
    global.browser = await playwright['chromium'].launch({ headless: false })
})

// To close the browser after all the scenarios
AfterAll(async () => {
    console.log('Close Browser')
    await global.browser.close()
})

// Before every scenario, Create new context and page
Before(async () => {
    console.log('Create new context and page')

    global.context = await global.browser.newContext({
        acceptDownloads: true,
        recordVideo: {
            dir: 'videos/',
            size: { width: 1200, height: 800 },
        },
        viewport: { width: 1200, height: 800 },

    })
    global.page = await global.context.newPage()
})


// After every scenario, Close context and page
After(async function (scenario) {
    console.log("STATUS: ", scenario.result.status);
    //if (scenario.result.status === 'PASSED') {
    const file_path = `screenshots/Failed Scenario ${scenario.pickle.name}.png`;
    // Attach the screenshot path to the test result+
    var buffer = await global.page.screenshot({ path: file_path, fullPage: true });
    this.attach(buffer, 'image/png');
    await global.page.close()
    await global.context.close()
    const path_video = await global.page.video().path();

    const bufferv = fs.readFileSync(path_video);
    this.attach(bufferv, 'video/webm');
    //}
});