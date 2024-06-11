import { main } from "./main/main.js"
import { header } from "./header/header.js"
import { footer } from "./footer/footer.js"

let DOM=document.querySelector('#root')

DOM.innerHTML=`
    <header>${header}</header>
    <main>${main}</main>
    <footer>${footer}</footer>
    <div class="whatssap">
        <img src="https://bk.gt//images/whatsappweb.png" width="50rem" alt="">
    </div>
`