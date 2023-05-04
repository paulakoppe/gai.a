import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add("404", "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

// sendButton.addEventListener("submit", function () {
//     alert("message sent successfully")
// })

// if (window.location.pathname == "/contact") {
//     console.log('teste')
    const sendButton = document.getElementById("myForm")
    console.log(sendButton)
//     console.log(sendButton)
// }

