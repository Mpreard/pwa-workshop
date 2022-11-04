const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/index.html",
    "/level.html",
    "/questions.html",
    "./assets/css/style.css",
    "./assets/css/questions.css",
    "./assets/js/app.js",
    "./assets/js/questions.js",
    "./assets/images/burger-menu.png",
    "./assets/images/quizz.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})