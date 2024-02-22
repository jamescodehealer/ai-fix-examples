import { Character  } from './no-dupe-else-if';
function totalEnum(ch: Character) {
    switch (ch) {
        default:
            return 'unknown';
        case Character.Hamlet:
        case Character.Ophelia:
            return 'principle';
        case Character.Polonius:
            return 'supporting';
        case Character.Fortinbras:
        case Character.Rosencrantz:
        case Character.Guildenstern:
            return 'minor';
    }
}