// import Vue from 'vue';
import MuButton from './button';
import MuInput from './input';

const MyUI = {};
// COMPONENTS = {
//   MuButton
// }
const COMPONENTS = [
  MuButton,
  MuInput
];

MyUI.install = function (Vue, options) {
    // console.log(options);
    // Vue.component(MuButton.name, MuButton)
    if (options && options.components) {
      const components = options.components;
      components.forEach((componentName) => {
        COMPONENTS.forEach((component) => {
          if(component.name === componentName) {
            Vue.component(component.name, component);
          }
        });
      });
    } else {
      COMPONENTS.forEach((component) => {
          Vue.component(component.name, component);
      });
    }
};

export default MyUI;