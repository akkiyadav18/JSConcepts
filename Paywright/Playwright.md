# Playwright
- Applications supported — Web browser apps ,
mobile web apps, API — Javascript, Typescript, Java, Python & .Net(C#)
- Languages supported
— Chromium,
- Browsers supported
- OS supported — Windows, MacOS,
- Features playwright
- Free & open source
- WebKit(Safari) and Firefox( headed / headless)
- Linux , Support CI Runs
- Multi-Browser , Multi-Language,
- Easy setup and configuration
- Functional, API, accessibility testing
- Built-in reporters, custom reports
- Cl, CD ,
- Docker
- Parallel testing
- Auto wait
- Built-in assertions
- Multi tab & multi window
- it has buidl in Auto Waits
- Can we used with popular frameworks like jest , mocha, etc
- High Performance 
- we can also do parallel execution 


# playwright installation 
- Node
- VS code Editor
- create Folder Project--> Open in VS code
- Install Playwright using Terminal
>`npm init playwright@latest`

- **For better information go through playwright documentation**

- (playwright.config.js) Playwright configuration managed the configuration of the projects
- in **package.json** we will add all the dependencies of the projects ( project manager for the projects )
- tests --> we can all the playwright tests
- npm playwright -v --> return installed version of the playwright 

- install playwright using VS code extension
- run playwright test `npx playwright test`


# how to create and run playwright Tests
- we have to create test block when we create test in playwright
- we have to create test block with 2 parameter is it title of test and anonymous functions 
>`test (''home page, ({page})=>{
>
>})`

- page is a fixture pesent in the playwright .Why is it called a “fixture”?In Playwright Test, fixtures are things that are automatically set up and given to your test function — like tools ready for you to use.So page is a fixture that Playwright gives you automatically to help you test websites.
- jS is a asynchronous language . async function returns a promise, to make is synchronise we use async and await, due to async functions returns a promise  
> npx playwright test --> run all test on all browsers in headless mode

> npx playwright test mytest.spec.js  --> run a specific test file

> npx playwright test myTestSpec.js --project=Chromium --> run on specific browser 

> npx playwright test mytest.spec.js --project= Chromium --headed

> npx playwright test mytest.spec.js --project=Chromium --headed --debug