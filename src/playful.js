import { financeContent } from './content.js'
import { setupDemoForm, setupMobileMenu } from './interactions.js'

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
    const question = document.createElement('span')
    question.className = 'faq-question'
    question.textContent = faq.question
    summary.append(question)
    const toggle = document.createElement('span')
    toggle.setAttribute('aria-hidden', 'true')
    const glyph = document.createElement('span')
    glyph.textContent = '+'
    toggle.append(glyph)
    summary.append(toggle)
    const answer = document.createElement('p')
    answer.textContent = faq.answer
    details.append(summary, answer)
    return details
  }))
}

setupMobileMenu('.playful-menu-toggle', '.playful-nav')
setupDemoForm('#playful-contact-form', '.playful-form-success')
