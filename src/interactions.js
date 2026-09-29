export function setupMobileMenu(buttonSelector, navigationSelector) {
  const button = document.querySelector(buttonSelector)
  const navigation = document.querySelector(navigationSelector)
  const label = button?.querySelector('.sr-only')

  if (!button || !navigation) return

  const setOpen = (open, returnFocus = false) => {
    button.setAttribute('aria-expanded', String(open))
    navigation.classList.toggle('is-open', open)
    if (label) label.textContent = open ? 'Close navigation menu' : 'Open navigation menu'
    if (returnFocus) button.focus()
  }

  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true')
  })

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false))
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false, true)
    }
  })

  document.addEventListener('pointerdown', (event) => {
    const isOpen = button.getAttribute('aria-expanded') === 'true'
    if (isOpen && !navigation.contains(event.target) && !button.contains(event.target)) {
      setOpen(false)
    }
  })
}

export function setupDemoForm(formSelector, statusSelector) {
  const form = document.querySelector(formSelector)
  const status = document.querySelector(statusSelector)
  if (!form || !status) return

  const clearStatus = () => {
    status.hidden = true
  }
  form.addEventListener('input', clearStatus)
  form.addEventListener('change', clearStatus)

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    status.hidden = false
    form.reset()
  })
}
