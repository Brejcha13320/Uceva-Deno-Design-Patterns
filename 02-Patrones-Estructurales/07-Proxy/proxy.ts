/**
 * ! Patrón Proxy
 * Este patrón se utiliza para controlar el acceso a un objeto, es decir,
 * se crea un objeto que actúa como intermediario entre el cliente y el objeto real.
 *
 * * Es útil cuando necesitamos controlar el acceso a un objeto,
 * * por ejemplo, para verificar si el cliente tiene permiso
 * * para acceder a ciertos métodos o propiedades.
 *
 * https://refactoring.guru/es/design-patterns/proxy
 *
 */

import { COLORS } from "../../helpers/colors.ts";

class Player {
    name: string;
    level: number;

    constructor(name: string, level: number){
        this.name = name;
        this.level = level;
    }
}

interface Room {
    enter(player: Player): void;
}

class SecretRoom implements Room {

    enter(player: Player): void {
      console.log(`%cBienvenido a la Sala Secreta ${player.name}`, COLORS.blue);
      console.log('Un gran enemigo te espera');
    }

}

//Proxy
class MagicPoral implements Room {
    private secretRoom: Room;
    private minLevel: number;

    constructor(room: Room, minLevel:number){
        this.secretRoom = room;
        this.minLevel = minLevel;
    }

    enter(player: Player): void {   
      if(player.level >= this.minLevel){
        this.secretRoom.enter(player);
        return;
      }

      console.log(`%cLo siento mucho ${player.name}, tu nivel ${player.level} es muy bajo, necesitas nivel ${this.minLevel}`, COLORS.red);
    }
}

function main(){
    const portal = new MagicPoral(new SecretRoom, 10);

    const player1 = new Player('Aventurero A', 5);
    const player2 = new Player('Aventurero B', 15);

    console.log(`%c${player1.name} intenta entrar al portal `, COLORS.blue);
    portal.enter(player1);

    console.log(`%c${player2.name} intenta entrar al portal `, COLORS.blue);
    portal.enter(player2);
}

main();
