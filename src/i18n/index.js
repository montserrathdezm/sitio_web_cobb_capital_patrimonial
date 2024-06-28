import { createI18n } from "vue-i18n";
import es from "./es.json"
import en from "./en.json"

console.log(localStorage.getItem("lang"))
export default createI18n({
  locale: localStorage.getItem("lang") || 'es',
  availableLocales: ['es','en'],
  messages:{
    en : en,
    es : es
  },
  runtimeOnly: false
});
