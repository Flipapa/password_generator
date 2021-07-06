function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generatePassword(options) {
  // Define source of password
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Create a collection to store picked up sources
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat([...lowerCaseLetters])
    // collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat([...upperCaseLetters])
  }

  if (options.numbers === 'on') {
    collection = collection.concat([...numbers])
  }

  if (options.symbols === 'on') {
    collection = collection.concat([...symbols])
  }

  // Remove excluded sources
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }

  // Return error notice if collection is empty
  if (collection.length === 0) {
    return `There is no valid character in your selection.`
  }

  // Generate password
  let password = ''

  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  // Return password
  return password
}

// Export generatePassword function for other files to use
module.exports = generatePassword