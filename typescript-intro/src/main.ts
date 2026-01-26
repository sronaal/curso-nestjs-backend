
import { chamander } from './bases/06-decorators2'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   Hola, Soy ${chamander.scream()}
  
  </div>
`

