import { financeContent } from './content.js'

document.querySelectorAll('[data-content]').forEach((element) => {
  const key = element.dataset.content
  if (financeContent[key]) element.textContent = financeContent[key]
})

const serviceCards = [...document.querySelectorAll('.wave-service')]
financeContent.services.forEach((service, index) => {
  const card = serviceCards[index]
  if (!card) return
  card.querySelector('h3').textContent = service.title
  card.querySelector('p').textContent = service.copy
  card.querySelector('.wave-service-index').textContent = `${String(index + 1).padStart(2, '0')} / ${['PLANNED INVESTMENT', 'WORKING CAPITAL', 'THE TOOLS TO GROW', 'INVOICES IN MOTION'][index]}`
  const link = card.querySelector('a')
  link?.setAttribute('aria-label', `Explore ${service.title.toLowerCase()}`)
})

const stepCards = [...document.querySelectorAll('.wave-step')]
financeContent.steps.forEach((step, index) => {
  const card = stepCards[index]
  if (!card) return
  card.querySelector('.wave-step-number').textContent = step.number
  card.querySelector('h3').textContent = step.title
  card.querySelector('p').textContent = step.copy
})

const faqRoot = document.querySelector('[data-faqs]')
if (faqRoot) {
  faqRoot.replaceChildren(...financeContent.faqs.map((faq, index) => {
    const details = document.createElement('details')
    details.className = 'wave-faq-item'
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

const menuButton = document.querySelector('.wave-menu-toggle')
const mobileNavigation = document.querySelector('.wave-mobile-nav')
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  mobileNavigation?.classList.toggle('is-open', !isOpen)
})

mobileNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false')
    mobileNavigation.classList.remove('is-open')
  })
})

document.querySelector('#wave-signup-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const email = document.querySelector('#wave-email')
  const contactEmail = document.querySelector('#wave-contact-email')
  const note = document.querySelector('#wave-form-note')
  if (email instanceof HTMLInputElement && contactEmail instanceof HTMLInputElement && note) {
    contactEmail.value = email.value
    note.textContent = 'Email added. Tell us a little more below to continue.'
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    document.querySelector('#contact')?.scrollIntoView({ behavior })
    document.querySelector('#wave-contact-name')?.focus({ preventScroll: true })
  }
})

document.querySelector('#wave-contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault()
  const status = document.querySelector('.wave-contact-success')
  if (status) status.hidden = false
  event.currentTarget.reset()
})
