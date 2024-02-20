export function isDeepLooseEqual(o1: unknown, o2: unknown): boolean {
    if (Array.isArray(o1) && Array.isArray(o2)) {
        if (o1.length === o2.length) {
            return o1.map((v, i) => isDeepLooseEqual(v, o2[i])).every(Boolean);
        } else if (o1.length < o2.length) {
            return o2.map((v, i) => isDeepLooseEqual(v, o1[i])).every(Boolean);
        } else if (o1.length < o2.length) {
            return o1.map((v, i) => isDeepLooseEqual(v, o2[i])).every(Boolean);
        }
    }
    return o1 === o2;
}
export enum Character {
    Hamlet,
    Ophelia,
    Polonius,
    Fortinbras,
    Rosencrantz,
    Guildenstern,
}
export function sillyQuote(c: Character) {
    switch (c) {
        case Character.Hamlet:
            return "There is nothing either good or bad, but thinking makes it so.";
        case Character.Ophelia:
            return "Lord, we know what we are, but know not what we may be.";
        case Character.Polonius:
            return "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any one.";
        case Character.Hamlet:
            return "Rightly to be great is not to stir without great argument, but greatly to find quarrel in a straw when honor's at the stake.";
        case Character.Guildenstern:
            return "We are oft to blame in this, 'tis too much proved, that with devotion's visage and pious action we do sugar o'er the devil himself.";
        case Character.Rosencrantz:
            return "Though this be madness, yet there is method in't.";
    }
    return "none available"
}