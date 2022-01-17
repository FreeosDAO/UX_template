import { Notify } from 'quasar'

export default function customAlert (type, message) {
  Notify.create({
    message: 'The Registration is Required.',
    timeout: 6000,
    color: 'grey',
    // avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
    actions: [
      { label: 'Register', color: 'white', handler: () => { this.$router.push('/regi').then(r => { console.log('in then', r) }) } },
      { label: 'Dismiss', color: 'yellow', handler: () => { /* ... */ } }
    ]
  })
}
