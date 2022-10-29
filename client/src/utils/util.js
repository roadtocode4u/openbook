export const isAdmin = () => {
    const openBookUser = JSON.parse(localStorage.getItem('openBookUser'))
    return openBookUser?.role === "admin"
}