import { financeContent } from './content.js'

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content
  if (financeContent[key]) element.textContent = financeContent[key]
})

const serviceCards = [...document.querySelectorAll('.playful-service')]
financeContent.services.forEach((service, index) => {
  const card = serviceCards[index]
  if (!card) return
  card.querySelector('h3').textContent = service.title
  card.querySelector('p').textContent = service.copy
  const link = card.querySelector('a')
  if (link) link.setAttribute('aria-label', `Ask about ${service.title.toLowerCase()}`)
})

const stepCards = [...document.querySelectorAll('.playful-step')]
financeContent.steps.forEach((step, index) => {
  const card = stepCards[index]
  if (!card) return
  card.querySelector('.playful-step-number').textContent = `STEP ${step.number}`
  card.querySelector('h3').textContent = step.title
  card.querySelector('p').textContent = step.copy
})

const faqRoot = document.querySelector('[data-faqs]')
if (faqRoot) {
  faqRoot.replaceChildren(...financeContent.faqs.map((faq, index) => {
    const details = document.createElement('details')
    details.className = 'playful-faq-item'
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

const menuButton = document.querySelector('.playful-menu-toggle')
const navigation = document.querySelector('.playful-nav')
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

document.querySelector('#playful-contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const status = document.querySelector('.playful-form-success')
  if (status) status.hidden = false
  event.currentTarget.reset()
})
