export default () => ({
  // svr state
  user_mode: 1, // TODO change back to zero after test // This shows the final route decision (to route to S,V, or R page).
  initUTC: 0, // Initial time point in UTC seconds (read from System table and converted).
  //             Counted in: setSystemTableAttrVal.
  // Used to transfer from parameters table to setSVRSTableAttrVal:
  lockfactor: 0,
  ratifyend: 0,
  ratifystart: 0,
  surveyend: 0,
  surveyranges: '',
  surveystart: 0,
  userlifespan: 0, // N/A
  voteend: 0,
  voteranges: '',
  votestart: 0,
  Test: { // TODO: Used only for 'PUSH' test, otherwise not used.
    surveyDone: false,
    voteDone: false,
    ratifyDone: false
  },
  tusermodeOn: true, // TODO PUSH Mode on/off PUSH TEST TODO remove
  //
  // SVRSInfo: { // TODO Seems to be not longer necessary
  // SVRSData: []
  // },
  // SystemInfo: { // TODO Seems to be not longer necessary
  // SystemData: []
  // },// TODO end
  //
  // converted ranges for Survey slides
  surveyrange1s: 0,
  surveyrange1e: 0,
  surveyrange2s: 0,
  surveyrange2e: 0,
  //
  // userlifespan: 0, Not used now.
  // converted ranges for Vote sliders
  voterange1s: 0,
  voterange1e: 0,
  voterange2s: 0,
  voterange2e: 0,
  voterange5s: 0,
  voterange5e: 0,
  //
  // user table (registration)
  isRegOpen: true, // is Registration pop-up window visible?
  stake: 0,
  account_type: null,
  registered_iteration: null,
  staked_iteration: null,
  votes: 0,
  issuances: 0,
  last_issuance: 0,
  total_issuance_ammount: 0,
  iteration: 0, // current iteration counted 'by myself' // TODO change later to MyIteration
  // constants (eventually move to .env)
  iterationSize: 3600 // TODO after testing switch back to normal size of iteration: 604800 (read from env) - not yet ready
})
