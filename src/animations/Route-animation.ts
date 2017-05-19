import {trigger,transition,state,style,animate} from "@angular/animations";

export const fadeInAmimation=
   trigger('fadeInAmimation',[
       transition(':enter',[
         style({opacity:0}),
         animate('2s',style({opacity:1}))
       ]),
   ]);