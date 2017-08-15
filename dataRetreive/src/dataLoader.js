import {readFileSync} from 'fs'

export const dataLoader = (id) => {
  const fileName = `factbook/rankorder/rawdata_${id}.txt`
  const content = readFileSync(fileName).toString()

  const rows = content.split("\r")

  const data = rows.map((e) => e.split(/\t\s*/))
}
