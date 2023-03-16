const puppeteer = require('puppeteer');

const credentials = {
	agency:'x',
	username:'x',
	password:'x'
};

(async () => {

	console.log('--IAR AUTOLAUNCH INITIALIZED--');
	console.log('OPENING BROWSER');
	const browser = await puppeteer.launch({
		headless: false,
		executablePath: '/usr/bin/chromium-browser',
		defaultViewport: null,
		ignoreDefaultArgs: ['--enable-automation','--enable-blink-features=IdleDetection'],
		args: ['--incognito','--user-data-dir=userdata/', '--enable-logging', '--disable-infobars', '--start-maximized','--start-fullscreen']
	});
	const pages = await browser.pages()
	const page = pages.find(x=>x!==undefined);
	console.log('NAVIGATING TO IAR WEBSITE');
	await page.goto('https://auth.iamresponding.com/login/member');
	console.log('PAGE NAV COMPLETED');

	if(await page.$('#accept-policy') !== null) {
		await page.click('#accept-policy');
		console.log('COOKIE POLICY ACCEPTED');
	} else {
		console.log('COOKIE POLICY ALREADY ACCEPTED');
	}

	console.log('CLEARING FIELDS');
	await page.evaluate( () => document.getElementById('Input_Agency').value = "");
	await page.evaluate( () => document.getElementById('Input_Username').value = "");
	await page.evaluate( () => document.getElementById('Input_Password').value = "");

	console.log('ENTERING CREDENTIALS');
	await page.type('#Input_Agency', credentials.agency);
	await page.type('#Input_Username', credentials.username);
	await page.type('#Input_Password', credentials.password);
	console.log('CREDENTIALS ENTERED');

	await page.click('button.btn.btn-sm-red.w-100');
	console.log('CREDENTIALS SUBMITTED');
	await page.waitForNavigation();
	console.log('CREDENTIAL INPUT COMPLETED');
	console.log('IAR DISPLAYING');
})();

