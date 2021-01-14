const puppeteer = require("puppeteer-core");
const cheerio = require('cheerio');

/* const getHtml = async () => {
	const responseHTML = await fetch("https://en.wikipedia.org/wiki/Portal:Geography");
	console.log(responseHTML);
// } */

const screenShotEx = async (url) => {
	const browser = await puppeteer.launch({
		executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
	});
	
	const page = await browser.newPage();
	await page.goto(url);
	const [el] = await page.$x(
		"/html/body/div[3]/div[3]/div[5]/div[1]/div[7]/div[2]/div[1]/ul/li[1]/div/div[2]/div/a/img",
	);
	const src = await el.getProperty("src");
	const srcTxt = await src.jsonValue()
		console.log({srcTxt})
	// await page.screenshot({ path: "./Screenshots/test.png" });

	await browser.close();
}

// screenShotEx("https://example.com");
screenShotEx("https://en.wikipedia.org/wiki/Portal:Geography");
// getHtml()