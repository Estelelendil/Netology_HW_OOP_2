// eslint-disable-next-line max-classes-per-file
class Character {
    health = 100;

    level = 1;

    attack;

    defence;

    constructor(name, type) {
      this.name = name;
      this.type = type;
      if (typeof this.name !== 'string' || this.name.length > 10 || this.name.length < 2) {
        throw new Error('Имя персонажа введено неверно');
      }
      if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(this.type)) {
        throw new Error('Тип персонажа введен неверно');
      }
    }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
