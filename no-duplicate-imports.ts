import { isDeepLooseEqual, sillyQuote  } from './no-dupe-else-if'
import { Character } from './no-dupe-else-if'

export function testQuotes() {
    const hamlet = sillyQuote(Character.Hamlet);
    const guildenstern = sillyQuote(Character.Guildenstern);
    if (isDeepLooseEqual(hamlet, guildenstern)) {
        throw new Error('duplicated quotes');
    }
}
