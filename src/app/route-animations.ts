import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            query(':enter, :leave', style({ display: 'flow-root' }), { optional: true }),
            group([
                query(':enter', [
                    style({ opacity: 0 }),
                    animate(500, style({ opacity: 1 }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity: 1 }),
                    animate(500, style({ opacity: 0 }))
                ], { optional: true }),
            ])
        ]),
    ]);