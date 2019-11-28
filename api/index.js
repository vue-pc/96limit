import ajax from './ajax'

export const getWines = () => ajax({
  url: '/wines'
})