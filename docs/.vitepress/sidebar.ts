import {sidebarFrontend, sidebarNodejs, sidebarGo } from './sidebar/index'

export default {
  '/frontEnd/': sidebarFrontend(),
  '/nodejs/': sidebarNodejs(),
  '/go/': sidebarGo(),
}
