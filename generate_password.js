function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

function generatePassword() {
  // Define source of password
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // Define dummy data
  options = {
    length: '15',
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on',
    excludeCharacters: 'kduen'
  }

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

  // Generate password
  let password = ''

  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  // Return password
  return password
}

generatePassword()