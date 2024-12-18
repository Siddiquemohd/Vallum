// types/jquery.d.ts
declare module "jquery" {
    interface JQuery {
      owlCarousel(options?: any): JQuery;
    }
  }
  
  declare global {
    interface Window {
      $: typeof import("jquery");
      jQuery: typeof import("jquery");
    }
  }
  