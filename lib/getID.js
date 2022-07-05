const getID = (str) => str.match(/[0-9]/g).slice(1).join("")
export default getID
