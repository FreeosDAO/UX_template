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
  // converted ranges for displaying parametrized Survey slides
  // processed by the
  surveyrange1s: 0, // Q2 slider start
  surveyrange1e: 0, // Q2 slider end
  surveymiddle2: 0, // Q2 slider default in the middle
  surveyrange2s: 0, // @4 slider start
  surveyrange2e: 0, // Q4 slider end
  surveymiddle4: 0, // Q4 slider default in the middle
  // converted ranges for displaying parametrized Vote sliders
  // processed by the
  voterange1s: 0, // Q1 slider start
  voterange1e: 0, // Q1 slider end
  votemiddle1: 0, // Q1 slider default in the middle
  voterange2s: 0,
  voterange2e: 0,
  votemiddle2: 0,
  voterange3s: 0.0,
  voterange3e: 0.0,
  votemiddle3: 0,
  voterange5s: 0,
  voterange5e: 0,
  votemiddle5: 0,
  //
  // === 'users' table (registration) ===
  isRegOpen: null, // open Registration dialog pop-up, if true
  Increment: 0,
  modalComponent: null, // Used for Registration pop-up
  isUserRecordExists: null, // 'users' table record exists for a given user, if true
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
  currentprice: 0,
  targetprice: 0,
  scan_interval: 30000 // 30 sec. right now // the interval between refreshing backend table reads (actually only affect svrs)
})
