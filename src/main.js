import { setupMobileMenu } from './interactions.js'

setupMobileMenu('.menu-toggle', '.primary-nav')

const filterButtons = [...document.querySelectorAll('[data-style-filter]')]
const projectCards = [...document.querySelectorAll('[data-style-category]')]
const collectionCount = document.querySelector('#collection-count')

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const activeFilter = button.dataset.styleFilter
    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute('aria-pressed', String(filterButton === button))
    })

    let visibleCount = 0
    projectCards.forEach((card) => {
      const isVisible = activeFilter === 'all' || card.dataset.styleCategory === activeFilter
      card.hidden = !isVisible
      if (isVisible) visibleCount += 1
    })

    if (collectionCount) {
      collectionCount.textContent = activeFilter === 'all'
        ? `Showing all ${visibleCount} website styles.`
        : `Showing ${visibleCount} ${button.textContent.toLowerCase()} direction.`
    }
  })
})

const projectDialog = document.querySelector('#project-dialog')
const projectForm = document.querySelector('#project-inquiry-form')
const projectStatus = document.querySelector('#project-dialog-success')
const openProjectDialog = document.querySelector('[data-open-project-dialog]')

projectForm?.addEventListener('input', () => {
  if (projectStatus) projectStatus.hidden = true
})

openProjectDialog?.addEventListener('click', () => {
  if (!projectDialog) return
  projectForm?.reset()
  if (projectStatus) projectStatus.hidden = true
  projectDialog.showModal()
  projectDialog.querySelector('#project-name')?.focus()
})

projectDialog?.querySelector('.dialog-close')?.addEventListener('click', () => projectDialog.close())
projectDialog?.addEventListener('click', (event) => {
  if (event.target === projectDialog) projectDialog.close()
})
projectForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  if (projectStatus) {
    projectStatus.hidden = false
    projectStatus.focus()
  }
  projectForm.reset()
})
