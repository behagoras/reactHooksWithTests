const slowProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('wuhu')
  }
  return `${iterations} iterations!`
}

export default slowProcess
