import { financeContent } from './content.js'

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content
  if (financeContent[key]) element.textContent = financeContent[key]
})

const servicesRoot = document.querySelector('[data-services]')
if (servicesRoot) {
  servicesRoot.replaceChildren(...financeContent.services.map((service) => {
    const card = document.createElement('article')
    card.className = 'service-card'
    const icon = document.createElement('span')
    icon.className = `service-icon service-icon-${service.tone}`
    icon.setAttribute('aria-hidden', 'true')
    icon.textContent = service.icon
    const title = document.createElement('h3')
    title.textContent = service.title
    const copy = document.createElement('p')
    copy.textContent = service.copy
    card.append(icon, title, copy)
    return card
  }))
}

const stepsRoot = document.querySelector('[data-steps]')
if (stepsRoot) {
  stepsRoot.replaceChildren(...financeContent.steps.map((step) => {
    const article = document.createElement('article')
    article.className = 'process-step'
    const number = document.createElement('span')
    number.className = 'step-number'
    number.textContent = step.number
    const content = document.createElement('div')
    const title = document.createElement('h3')
    title.textContent = step.title
    const copy = document.createElement('p')
    copy.textContent = step.copy
    content.append(title, copy)
    article.append(number, content)
    return article
  }))
}

const faqsRoot = document.querySelector('[data-faqs]')
if (faqsRoot) {
  faqsRoot.replaceChildren(...financeContent.faqs.map((faq, index) => {
    const details = document.createElement('details')
    details.className = 'faq-item'
    if (index === 0) details.open = true
    const summary = document.createElement('summary')
    summary.append(document.createTextNode(faq.question))
    const icon = document.createElement('span')
    icon.setAttribute('aria-hidden', 'true')
    icon.textContent = '+'
    summary.append(icon)
    const answer = document.createElement('p')
    answer.textContent = faq.answer
    details.append(summary, answer)
    return details
  }))
}

const menuButton = document.querySelector('.finance-menu-toggle')
const navigation = document.querySelector('.finance-nav')
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

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const status = document.querySelector('.form-success')
  if (status) status.hidden = false
  event.currentTarget.reset()
})
