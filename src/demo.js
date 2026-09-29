import { financeContent } from './content.js'
import { setupDemoForm, setupMobileMenu } from './interactions.js'

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
    const action = document.createElement('a')
    action.className = 'service-card-action'
    action.href = '#contact'
    action.setAttribute('aria-label', `Ask about ${service.title.toLowerCase()}`)
    action.append(document.createTextNode('Explore option'))
    const arrow = document.createElement('span')
    arrow.setAttribute('aria-hidden', 'true')
    arrow.textContent = '↗'
    action.append(arrow)
    card.append(icon, title, copy, action)
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
    const question = document.createElement('span')
    question.className = 'faq-question'
    question.textContent = faq.question
    summary.append(question)
    const icon = document.createElement('span')
    icon.setAttribute('aria-hidden', 'true')
    const glyph = document.createElement('span')
    glyph.textContent = '+'
    icon.append(glyph)
    summary.append(icon)
    const answer = document.createElement('p')
    answer.textContent = faq.answer
    details.append(summary, answer)
    return details
  }))
}

setupMobileMenu('.finance-menu-toggle', '.finance-nav')
setupDemoForm('#contact-form', '.form-success')
