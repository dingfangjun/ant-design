import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const getWeatherJson = () => {
  return builder([
    {
      date: '2021-05-26',
      temperature: '17/23℃',
      weather: '中雨转多云',
      wid: { day: '08', night: '01' },
      direct: '南风转西风'
    },
    {
      date: '2021-05-27',
      temperature: '19/29℃',
      weather: '阴',
      wid: { day: '02', night: '02' },
      direct: '南风转西南风'
    },
    {
      date: '2021-05-28',
      temperature: '16/27℃',
      weather: '多云转阴',
      wid: { day: '01', night: '02' },
      direct: '西北风转东南风'
    },
    {
      date: '2021-05-29',
      temperature: '19/29℃',
      weather: '多云',
      wid: { day: '01', night: '01' },
      direct: '东南风转南风'
    },
    {
      date: '2021-05-30',
      temperature: '19/29℃',
      weather: '晴转多云',
      wid: { day: '00', night: '01' },
      direct: '东南风'
    }
  ])
}

Mock.mock(/\/study\/getWeatherJson/, 'get', getWeatherJson)
