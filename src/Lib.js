export const searchBySkills = (arr, techs) => {
    return arr.filter(elm => {
        return techs.every(item => elm.skills.includes(item))
    })
}