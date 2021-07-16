import React from 'react'

type Props = {
  name: string,
  age: number
}

function trainingApp({ name, age }: Props) {
  return <div>Hey, {name}, tengo {age} años</div>
}

export default trainingApp
