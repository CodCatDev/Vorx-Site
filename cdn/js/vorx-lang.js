const messages = {
    en: {
        heroTitle: 'Game engine for AA and indie games',
        heroDesc: 'Vorx is a cross-platform engine powered by Python 3.12 and Cython. Create 2D games with no technical limits.',
        featuresSize: "Engine size",
        featuresFps: "In medium-sized scenes",
        getStart: "Get started",
        navDocs: "Documentation (Soon)",
        navDownload: "Download",
        navSource: "Source Code",
        aboutTitle: 'Made by <span class="grad">Developers,</span> for <span class="grad">Developers',
        aboutDesc: 'VorxEngine is a lightweight 2D game engine for those who actually want to make games instead of fighting with bloated interfaces. We took the simplicity of Python, squeezed maximum speed out of it with Cython, and strapped on a rock-solid SDL2 renderer. No garbage, no overhead — just pure performance and fully open-source code',
        footerEngine: 'Engine',
        footerCommunity: 'Community',
        linksSource: 'Source Code',
        linksDownload: 'Download',
        linksYoutube: 'Youtube',
        linksX: 'X (Twitter)',
        teamTitle: 'Our <span class="grad">Team</span>',
        teamDesc1: "CEO and main developer",
    },
    ru: {
        heroTitle: 'Игровой движок для AA и инди‑проектов',
        heroDesc: 'Vorx - кросс-платформенный движок на Python 3.12 и Cython. Создавайте 2D игры без технических ограничений.',
        featuresSize: "Вес движка",
        featuresFps: "В типовых сценах",
        getStart: "Начать работу",
        navDocs: "Документация (скоро)",
        navDownload: "Скачать",
        navSource: "Исходный код",
        aboutTitle: 'Сделано <span class="grad">Разработчиками,</span> для <span class="grad">Разработчиков',
        aboutDesc: "VorxEngine - это лёгкий 2D-игровой движок для тех, кто действительно хочет делать игры, а не воевать с раздутыми интерфейсами. Мы взяли простоту Python, выжали из него максимум скорости с помощью Cython и добавили надёжный рендерер на SDL2. Никакого мусора и лишнего веса - только чистая производительность и полностью открытый исходный код",
        footerEngine: 'Движок',
        footerCommunity: 'Сообщество',
        linksSource: 'Исходный код',
        linksDownload: 'Скачать',
        linksYoutube: 'Youtube',
        linksX: 'X (Twitter)',
        teamTitle: 'Наша <span class="grad">Команда</span>',
        teamDesc1: "CEO и основной разработчик",
    },
}

const toggle = document.getElementById('langToggle')

function applyFlag(lang) {
  document.querySelectorAll('.flag').forEach(f => f.classList.remove('active'))
  const sel = lang === 'ru' ? '.flagRu' : '.flagEn'
  const img = document.querySelector(sel)
  if (img) img.classList.add('active')
}

function applyLang(lang) {
  const dict = messages[lang] || messages.en

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n
    const value = dict[key]
    if (!value) return

    if (value.includes('<')) {
      el.innerHTML = value
    } else {
      el.textContent = value
    }
  })


  document.documentElement.dataset.lang = lang
  localStorage.setItem('lang', lang)
  applyFlag(lang)
}

function initLang() {
  const saved = localStorage.getItem('lang')
  const browser = (navigator.language || 'en').startsWith('ru') ? 'ru' : 'en'
  const lang = saved || browser
  applyLang(lang)
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const current = localStorage.getItem('lang') || 'en'
    const next = current === 'en' ? 'ru' : 'en'
    applyLang(next)
  })
}

initLang()