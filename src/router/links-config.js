export let linkConfig = [
  {
    activeOnlyWhenExact: true,
    to: '/',
    label: 'Tacos2'
  },
  {
    to: '/dddd',
    label: 'sandwiches'
  },
  {
    to: '/w',
    label: 'w'
  }
]
export function setLinkConfig () {
  linkConfig = [
    {
      activeOnlyWhenExact: true,
      to: '/',
      label: 'Tacos2'
    },
    {
      to: '/dddd',
      label: 'sandwiches'
    }
  ]
}
