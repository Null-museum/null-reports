import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'NullMuseum',
    description: 'A community gallery of NULL error screenshots',

    // SSR is enabled by default in VitePress
    // Add meta tags for SEO
    head: [
        ['meta', { name: 'keywords', content: 'null error, null pointer, bug screenshots, programming errors, software bugs, null exceptions' }],
        ['meta', { name: 'author', content: 'NullMuseum Community' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:site_name', content: 'NullMuseum' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ],

    // Generate sitemap
    sitemap: {
        hostname: 'https://null-museum.github.io/null-reports'
    },

    // i18n configuration
    locales: {
        root: {
            label: 'English',
            lang: 'en',
            title: 'NullMuseum - Gallery of NULL Errors',
            description: 'Community-driven collection of NULL error screenshots from various programs and systems. Share your NULL bugs!',
            head: [
                ['meta', { property: 'og:title', content: 'NullMuseum - Gallery of NULL Errors' }],
                ['meta', { property: 'og:description', content: 'Community collection of NULL error screenshots from various programs and systems' }],
                ['meta', { property: 'og:locale', content: 'en_US' }],
            ],
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Contribute', link: '/contribute' }
                ],

                socialLinks: [
                    { icon: 'github', link: 'https://github.com/Null-museum/null-reports' }
                ],

                footer: {
                    message: 'Community contributions welcome!',
                    copyright: 'MIT Licensed'
                }
            }
        },
        ru: {
            label: 'Русский',
            lang: 'ru',
            title: 'NullMuseum - Галерея NULL Ошибок',
            description: 'Коллекция скриншотов NULL ошибок из различных программ и систем. Делитесь своими багами!',
            head: [
                ['meta', { property: 'og:title', content: 'NullMuseum - Галерея NULL Ошибок' }],
                ['meta', { property: 'og:description', content: 'Коллекция скриншотов NULL ошибок из различных программ и систем' }],
                ['meta', { property: 'og:locale', content: 'ru_RU' }],
            ],
            themeConfig: {
                nav: [
                    { text: 'Главная', link: '/ru/' },
                    { text: 'Как добавить', link: '/ru/contribute' }
                ],

                socialLinks: [
                    { icon: 'github', link: 'https://github.com/Null-museum/null-reports' }
                ],

                footer: {
                    message: 'Приглашаем к сотрудничеству!',
                    copyright: 'Лицензия MIT'
                }
            }
        }
    },

    // Optimize image loading
    vite: {
        build: {
            assetsInlineLimit: 0 // Don't inline images
        }
    },

    // Enable clean URLs
    cleanUrls: true,

    // Last updated timestamp
    lastUpdated: true
})
