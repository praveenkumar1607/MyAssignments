import {chromium, firefox, test } from "@playwright/test";

test(`Redbus in Edge browser`,async()=>{


    const browser =await chromium.launch({
    channel: 'msedge',
    headless: false  })
  const context=await browser.newContext()
  const page=await context.newPage()
  await page.goto("https://www.redbus.in/")

  const title:string=await page.title()
    const pageurl:string=  page.url();

  console.log(title);
  console.log(pageurl);
  
  
  
}
)

test(`Flipkart in firefox`, async()=>{

  const browser=await firefox.launch()
  const context=await browser.newContext()
  const page=await context.newPage()

  await page.goto("https://www.flipkart.com/")

  let pagetitle:string=await page.title()
  let pageurl:string= page.url()

  console.log(pagetitle);
  console.log(pageurl);
  
  



})