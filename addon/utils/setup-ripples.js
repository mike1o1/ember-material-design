export default function setupRipples(component, element) {
    if (component.get('mdNoInk')) {
        return;
    }
    component.get('rippleService').attachButtonBehavior(element);
}
