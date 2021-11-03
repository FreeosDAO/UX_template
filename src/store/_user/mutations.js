// import notifyAlert from 'src/services/notify-alert'

export const setNftTableAttrVal = function (state, payload) {
  // const attr = payload.key
  const val = payload.value
  console.log(JSON.stringify(val)) // test
  console.log(val)
  state.NftList = val
}

export const setCount = function (state, count) {
  state.count = count
}
