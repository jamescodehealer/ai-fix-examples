interface Position { x: number, y: number }
class Character {
    name: string;
    position: Position;
    hp: number;
    gp: number;
    xp: number;
    constructor(name: string, position: Position, hp: number) {
        this.name = name;
        this.position = position;
        this.hp = hp;
        this.gp = 10;
        this.xp = 0;
    }
}
class Monster extends Character {
    level: number;
    family: string;
    constructor(level: number, family: string) {
        this.level = level;
        this.family = family;
    }
}
class Player extends Character {
    equipment: string[];
    constructor(equipment: string[]) {
        this.equipment = equipment;
    }
}
