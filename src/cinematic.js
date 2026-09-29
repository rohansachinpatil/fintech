import { financeContent } from './content.js'

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content
  if (financeContent[key]) element.textContent = financeContent[key]
})

const servicesRoot = document.querySelector('[data-services]')
if (servicesRoot) {
  servicesRoot.replaceChildren(...financeContent.services.map((service, index) => {
    const article = document.createElement('article')
    article.className = 'cinema-service'
    const number = document.createElement('span')
    number.className = 'cinema-service-no'
    number.textContent = String(index + 1).padStart(2, '0')
    const copy = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = service.title
    const description = document.createElement('p')
    description.textContent = service.copy
    copy.append(title, description)
    const arrow = document.createElement('span')
    arrow.className = 'cinema-service-arrow'
    arrow.setAttribute('aria-hidden', 'true')
    arrow.textContent = '↗'
    article.append(number, copy, arrow)
    return article
  }))
}

const stepsRoot = document.querySelector('[data-steps]')
if (stepsRoot) {
  stepsRoot.replaceChildren(...financeContent.steps.map((step) => {
    const article = document.createElement('article')
    article.className = 'cinema-step'
    const number = document.createElement('span')
    number.className = 'cinema-step-no'
    number.textContent = step.number
    const copy = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = step.title
    const description = document.createElement('p')
    description.textContent = step.copy
    copy.append(title, description)
    article.append(number, copy)
    return article
  }))
}

const faqsRoot = document.querySelector('[data-faqs]')
if (faqsRoot) {
  faqsRoot.replaceChildren(...financeContent.faqs.map((faq, index) => {
    const details = document.createElement('details')
    details.className = 'cinema-faq-item'
    if (index === 0) details.open = true
    const summary = document.createElement('summary')
    summary.append(document.createTextNode(faq.question))
    const toggle = document.createElement('span')
    toggle.setAttribute('aria-hidden', 'true')
    toggle.textContent = '+'
    summary.append(toggle)
    const answer = document.createElement('p')
    answer.textContent = faq.answer
    details.append(summary, answer)
    return details
  }))
}

const menuButton = document.querySelector('.cinema-menu-toggle')
const navigation = document.querySelector('.cinema-nav')
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  navigation?.classList.toggle('is-open', !isOpen)
})

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false')
    navigation.classList.remove('is-open')
  })
})

document.querySelector('#cinema-contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const status = document.querySelector('.cinema-form-success')
  if (status) status.hidden = false
  event.currentTarget.reset()
})
