import { requisitionApi, requisitionProfile } from './requestProfileAndRepos.js'



const getName = () => {
const button = document.querySelector('button')

button.addEventListener('click', async () => {
    const input = document.querySelector('input')
    const name = input.value
    localStorage.setItem('userName', name)
    
    requisitionApi()
    requisitionProfile()
})
}
getName()




