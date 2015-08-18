export function getFullName(person) {
  if("object" !== typeof person)
    return undefined

  let fullName = []
  if("string" === typeof person.first)
    fullName.push(person.first)
  if("string" === typeof person.second)
    fullName.push(person.second.charAt(0) + '.')
  if("string" === typeof person.last)
    fullName.push(person.last)
  return fullName.join(' ')
}

export default {
  getFullName
}
