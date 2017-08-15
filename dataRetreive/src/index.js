import {JSDOM} from 'jsdom'
import fs from 'fs'

const toFormatedString = (number) => {
  if (number < 10) {
    return '00' + number
  } else if (number <100) {
    return '0' + number
  } else {
    return number
  }
}

const outputName = "mapFile.js"

// fs.writeFileSync(outputName, "export const mapping = [")

fs.readdirSync('factbook/rankorder/').forEach(fileName => {
  if (/[0-9]*rank.html/.test(fileName) && fileName.substr(0, 4) >= "2123") {

    fileName = 'factbook/rankorder/' + fileName
    console.log(fileName)
    const rawDOM = fs.readFileSync(fileName).toString()

    const dom = new JSDOM(rawDOM)

    const document = dom.window.document

    debugger

    const content = dom.window.document.getElementsByClassName("region")[0].children[0].textContent
    fs.appendFileSync(outputName, "{id: " + fileName.substr(19, 4) + ", category: ")
    fs.appendFileSync(outputName, "\"" + content.substring(4, content.length) + "\"" + "},\n")
  }
})

fs.appendFileSync(outputName, "]\n")
