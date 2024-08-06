import { styled } from 'restyle'

const Text = styled('span', {
  backgroundColor: 'black',
  color: 'white',
})

export default function Page() {
  return <Text>Hello, World!</Text>
}
