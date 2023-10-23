import "jquery";
import { Chart } from "chart.js";
declare global {
  interface Window {
    $: any;
  }

  interface JQuery {
    modal: any;
  }
}
