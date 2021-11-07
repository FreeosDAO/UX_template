// import notifyAlert from 'src/services/notify-alert'

export const setSVRSTableAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log('*** svrs payload', JSON.stringify(val)) // test
  state.SVRSInfo[attr] = val
}

export const setParamTableAttrVal = function (state, payload) {
  const attr = payload.key
  const val = payload.value
  console.log('*** parameters:', JSON.stringify(val)) // test
  console.log('paramname.lockfactor', val[0].value)
  state.ParamInfo[attr] = val
}

export const setSystemTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log('*** System Table', JSON.stringify(val)) // test
  console.log('init', val[0].init)
  const str = val[0].init
  const replaced = str.replace('T', ', ')
  const myDate = new Date(replaced)
  console.log('myDate', replaced)
  const myEpoch = myDate.getTime() / 1000.0
  console.log('epoch', myEpoch)
  state.init_time_seconds = myEpoch // init point in UTC seconds
  // Note that getTime() returns milliseconds, not plain seconds:
  const currentTimeSec = Math.floor((new Date()).getTime() / 1000)
  const diff = Math.floor(((currentTimeSec - myEpoch) / 604800) + 1)
  console.log('Correct UTC timestamp ' + currentTimeSec)
  console.log('Iteration = ', diff)
  state.iteration = diff // active iteration number
  // state.SystemInfo[attr] = val // TODO not yet
}
