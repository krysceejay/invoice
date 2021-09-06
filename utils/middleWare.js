export const isSuperAdmin = role => {
    if(role === "Admin") return true
    return false
}
export const isNotSuperAdmin = role => {
    if(role !== "Admin") return true
    return false
}
export const isSupportAdmin = role => {
    if(role === "Support") return true
    return false
}
export const isBlogger = role => {
    if(role === "Blogger") return true
    return false
}
export const isAdminOrSupport = role => {
    if(role === "Admin" || role === "Support") return true
    return false
}
export const isAdminOrBlogger = role => {
    if(role === "Admin" || role === "Blogger") return true
    return false
}