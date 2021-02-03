import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/index.scss'

// import { Field } from 'vant'
// import 'vant/lib/field/style'
// Vue.use(Field)

import { Toast } from 'vant'
import 'vant/lib/toast/style'
Vue.use(Toast);

// import { Form } from 'vant'
// import 'vant/lib/form/style'
// Vue.use(Form)

// import { Popup } from 'vant'
// import 'vant/lib/popup/style'
// Vue.use(Popup)

// import { Area } from 'vant'
// import 'vant/lib/area/style'
// Vue.use(Area)

// import { Divider } from 'vant'
// import 'vant/lib/divider/style'
// Vue.use(Divider)

// import { Icon } from 'vant'
// import 'vant/lib/icon/style'
// Vue.use(Icon)

// import { Search } from 'vant'
// import 'vant/lib/search/style'
// Vue.use(Search)

// import { Button } from 'vant'
// import 'vant/lib/button/style'
// Vue.use(Button)

// import { RadioGroup, Radio } from 'vant'
// import 'vant/lib/radio-group/style'
// import 'vant/lib/radio/style'
// Vue.use(Radio)
// Vue.use(RadioGroup)

// import { Checkbox, CheckboxGroup } from 'vant'
// import 'vant/lib/checkbox-group/style'
// import 'vant/lib/checkbox/style'
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)

// import { Picker } from 'vant'
// import 'vant/lib/picker/style'
// Vue.use(Picker)

// import { Dialog } from 'vant'
// import 'vant/lib/dialog/style'
// Vue.use(Dialog)

// import { Uploader } from 'vant'
// import 'vant/lib/uploader/style'
// Vue.use(Uploader)

// import { ActionSheet } from 'vant'
// import 'vant/lib/action-sheet/style'
// Vue.use(ActionSheet)

// import VConsole from 'vconsole'

// if (process.env.NODE_ENV !== 'production') {
//   new VConsole()
// }

import * as api  from '@/api/index'

Vue.prototype.$api = api.default

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
