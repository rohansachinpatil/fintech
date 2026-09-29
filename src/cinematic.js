import { financeContent } from './content.js'
import { setupDemoForm, setupMobileMenu } from './interactions.js'

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content
  if (financeContent[key]) element.textContent = financeContent[key]
})

const servicesRoot = document.querySelector('[data-services]')
if (servicesRoot) {
  servicesRoot.replaceChildren(...financeContent.services.map((service, index) => {
    const article = document.createElement('a')
    article.className = 'cinema-service'
    article.href = '#contact'
    article.setAttribute('aria-label', `Ask an advisor about ${service.title.toLowerCase()}`)
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

setupMobileMenu('.cinema-menu-toggle', '.cinema-nav')
setupDemoForm('#cinema-contact-form', '.cinema-form-success')
