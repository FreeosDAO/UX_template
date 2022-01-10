export default () => ({
  // svr state
  user_mode: 1, // TODO change back to zero/null after test // This shows the final route decision (to route to S,V, or R page).
  delay: 60, // 1-minute display timer delay // actually, not used todo left for testing
  initUTC: 0, // Initial time point in UTC seconds (read from System table and converted).
  //             Counted in: setSystemTableAttrVal.
  timer: 0, // Displayed timer value on landing page.
  timerOffset: 0, // Offset going through complete iteration from beginning to the end.
  congratulationTitle: '', // todo not work well yet
  //
  // 'parameters' table. (Used to transfer from parameters table to setSVRSTableAttrVal:)
  lockfactor: 0,
  ratifystart: 0,
  surveyend: 0,
  voteend: 0,
  ratifyend: 0,
  surveyranges: '',
  surveystart: 0,
  userlifespan: 0, // not used yet.
  voteranges: '',
  votestart: 0,
  //
  //
  // converted ranges for Survey slides // TODO setup from parameters table as a parsing result
  surveyrange1s: 1, // TODO change all to zero later.
  surveyrange1e: 24,
  surveyrange2s: 1,
  surveyrange2e: 24,
  //
  // converted ranges for Vote sliders // TODO setup from parameters table as a parsing result
  voterange1s: 0, // TODO change all back to zero later.
  voterange1e: 100,
  voterange2s: 6,
  voterange2e: 30,
  voterange3s: 0.0167,
  voterange3e: 0, // todo uses const from .env
  voterange5s: 0,
  voterange5e: 50,
  //
  fieldA: '',
  fieldB: '',
  // === 'users' table (registration) ===
  isRegOpen: null, // open Registration dialog pop-up, if true
  userRecordExists: null, // 'users' table record exists for a given user, if true
  stake: 0,
  account_type: null, // 'v' or 'a' - Note: accept only 'v'
  registered_iteration: null,
  staked_iteration: null,
  votes: 0,
  issuances: 0,
  last_issuance: 0,
  total_issuance_ammount: 0,
  // === === ===
  iteration: 0, // current iteration counted 'by myself'
  // CONSTANTS: (consider move to .env)
  iterationSize: 3600, // TODO after testing switch back to normal size of iteration: 604800 (todo read from env).
  current_price: 1.2700, // TODO Source need to be defined!
  scan_interval: 30000 // 30 sec. right now // the interval between refreshing backend table reads (actually only affect svrs)
})
