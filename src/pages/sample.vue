Vue.component('input_radio', {
props: {
value: {},
v_value: {},
label: {
type: String,
default: ''
},
name: {
type: String,
default: ''
},
id: {
type: String,
default: ''
}
},
template: `
<div class="field__radio" :class="[value === v_value?'field__radio--checked':'']">
<label :for="id" @click="$emit('input', v_value)">
  <input type="radio" :value="label" :name="name" :id="id" /> {{ label }}
</label>
<!-- COMMENT THE ABOVE AND UNCOMMENT THE BELOW IF YOU WANT CUSTOM LOOKING RADIO BUTTON INSTEAD OF REGULAR LOOKING RADIO BUTTON -->
<!--<div class="label" @click="$emit('input', v_value)">
    <span>{{ label }}</span>
</div>-->
</div>
`
});

Vue.component('app-component', {
template: `
<div>
<input_radio
  label="Radio 1"
  v-model="value_radio"
  v_value="radio-1"
  name="test-radio"
  id="test-radio-1">
</input_radio>

<input_radio
  label="Radio 2"
  v-model="value_radio"
  v_value="radio-2"
  name="test-radio"
  id="test-radio-2">
</input_radio>

<input_radio
  label="Radio 3"
  v-model="value_radio"
  v_value="radio-3"
  name="test-radio"
  id="test-radio-3">
</input_radio>

<p>Selected value : {{ value_radio }}</p>
</div>
`,
data() {
return {
value_radio: ""
};
}
});

new Vue({
el: '#app',
template: `<app-component></app-component>`
});


<body>
<div id="app"></div>
</body>


