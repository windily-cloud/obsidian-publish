import fs from 'fs'
import path from 'path'
import { HopeThemeSidebarConfig } from 'vuepress-theme-hope'

function generateSidebar(docAbsolutePath: string): any {
  let result: HopeThemeSidebarConfig = []
  const files = fs.readdirSync(docAbsolutePath)
  for (let filePath of files) {
    const absolutePath = path.join(docAbsolutePath, filePath)
    const stat = fs.statSync(absolutePath)
    if (stat.isDirectory()) {
      const prefixList = path.relative(__dirname, absolutePath).split(path.sep)
      prefixList.shift()
      prefixList.shift()
      const prefix = prefixList.join("/")
      result.unshift({
        text: filePath,
        prefix: prefix,
        collapsable: true,
        icon: "folder",
        children: generateSidebar(absolutePath)
      })
    } else if (stat.isFile() && path.extname(filePath) === ".md") {
      console.log(filePath)
      result.push({
        text: filePath,
        link: filePath,
        icon: "file"
      })
    }
  }
  return result
}

const sidebar = [{
  text: "obsidian vault",
  prefix: "/publish",
  collapse: false,
  link: "/",
  icon: "folder",
  children: generateSidebar(path.join(__dirname, `../publish`))
}]


export default sidebar