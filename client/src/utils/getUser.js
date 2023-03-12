// export default function getUser() {
//     const openBookUser = JSON.parse(localStorage.getItem('openBookUser'))
//     return openBookUser
// }

export const openBookUser = JSON.parse(localStorage.getItem('openBookUser')) || null;