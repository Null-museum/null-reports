import DefaultTheme from 'vitepress/theme'
import ImageGallery from './components/ImageGallery.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('ImageGallery', ImageGallery)
    },
    setup() {
        // Add JSON-LD structured data
        if (typeof document !== 'undefined') {
            const script = document.createElement('script')
            script.type = 'application/ld+json'
            script.textContent = JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "NullMuseum",
                "description": "Community-driven gallery of NULL error screenshots",
                "url": "https://null-museum.github.io/null-reports",
                "inLanguage": ["en", "ru"]
            })
            document.head.appendChild(script)
        }
    }
}
