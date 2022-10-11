export default function getUser() {
    const openBookUser = localStorage.getItem('openBookUser')
    return openBookUser
}