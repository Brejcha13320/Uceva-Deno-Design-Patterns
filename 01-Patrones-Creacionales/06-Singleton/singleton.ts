/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../../helpers/colors.ts";

class DragonBalls {

    static instance: DragonBalls;
    private ballsCollected: number;

    private constructor(){
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if(!DragonBalls.instance){
            DragonBalls.instance = new DragonBalls();
            console.log('%cCreación de las Esferas', COLORS.green);
        }
        return DragonBalls.instance;
    }

    collectBall(){
        if(this.ballsCollected < 7){
            this.ballsCollected++;
            console.log(`Esfera Recolectada. Total de Esferas: ${ this.ballsCollected }`);
            return;
        }
        console.log('%cYa se han recolectado las 7 esferas del Dragon', COLORS.yellow);
    }

    summonShenlong(){
        if(this.ballsCollected === 7){
            console.log('%cShenlong ha sido invocado, Pide tu deseo!', COLORS.orange);
            this.ballsCollected = 0;
            return;
        }
        console.log(`%cAun faltan ${ 7 - this.ballsCollected } esferas para invocar a Shenlong`, COLORS.red)
    }

}

function main(){

    const gokuDragonBalls = DragonBalls.getInstance();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.summonShenlong();

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonBalls.summonShenlong();

    vegetaDragonBalls.summonShenlong();
}

main();