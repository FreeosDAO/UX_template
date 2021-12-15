export default () => ({
  // svr state
  user_mode: 1, // TODO change back to zero after test // This shows the final route decision (to route to S,V, or R page).
  initUTC: 0, // Initial time point in UTC seconds (read from System table and converted).
  //             Counted in: setSystemTableAttrVal.
  timer: 0, // This is based on current offset value. It is used to build up currently displayed timer value on landing page.
  // timer: { // TODO Unlock later after format
  // days: 0,
  // hours: 0,
  // min: 0
  // }
  //
  // Used to transfer from parameters table to setSVRSTableAttrVal:
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
  // converted ranges for Survey slides
  surveyrange1s: 0,
  surveyrange1e: 0,
  surveyrange2s: 0,
  surveyrange2e: 0,
  //
  // converted ranges for Vote sliders
  voterange1s: 0,
  voterange1e: 0,
  voterange2s: 0,
  voterange2e: 0,
  voterange5s: 0,
  voterange5e: 0,
  //
  // user table (registration)
  isRegOpen: null, // Is Registration pop-up open? (default:  false = no) // TODO experiment with null
  stake: 0,
  account_type: null,
  registered_iteration: null,
  staked_iteration: null,
  votes: 0,
  issuances: 0,
  last_issuance: 0,
  total_issuance_ammount: 0,
  iteration: 0, // current iteration counted 'by myself'
  // constants (eventually move to .env)
  iterationSize: 3600 // TODO after testing switch back to normal size of iteration: 604800 (read from env).
})
