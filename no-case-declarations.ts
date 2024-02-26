import { Character } from './no-dupe-else-if'
export function soliloquoy(locutor: Character, others: Character[]) {
    switch (locutor) {
        case Character.Hamlet:
            const ophelia = others.find(x => x === Character.Ophelia);
            const polonius = others.find(x => x === Character.Polonius);
            let scene: Character[] = [locutor]
            if (ophelia) {
                scene.push(ophelia);
            }
            if (polonius) {
                scene.push(polonius);
            }
            for (const x of others) {
                console.log('To be or not to be');
            }
            return scene;
        case Character.Ophelia:
            const hamlet = others.find(x => x === Character.Hamlet);
            return [locutor, hamlet];
        default:
            return [locutor];
    }
}