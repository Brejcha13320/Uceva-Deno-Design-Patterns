/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from "../../helpers/colors.ts";

class Projector {
    turnOn(){
        console.log('Proyector Encendido');
    }
    
    turnOff(){
        console.log('Proyector Apagado');
    }
}

class SoundSystem {
    on(){
        console.log('Sistema de Sonido Encendido');
    }
    
    off(){
        console.log('Sistema de Sonido Apagado');
    }
}

class VideoPlayer {
    on(){
        console.log('Video Player Encendido');
    }

    play(movie: string){
        console.log(`Reproducioendo %c${movie}`, COLORS.blue);
    }
    
    stop(){
        console.log('Pelicula Detenida');
    }
    
    off(){
        console.log('Video Player Apagado');
    }
}

class PopcornMaker {
    poppingPopcorn(){
        console.log('Haciendo Palomitas');
    }
    
    turnOffPoppingPopcorn(){
        console.log('Deteniendo las Palomitas');
    }
}

interface HomeTheaterFacadeOptions {
    projector: Projector;
    soundSystem: SoundSystem;
    videoPlayer: VideoPlayer;
    popcornMaker: PopcornMaker;
}

class HomeTheaterFacade {
    private projector: Projector;
    private soundSystem: SoundSystem;
    private videoPlayer: VideoPlayer;
    private popcornMaker: PopcornMaker;

    constructor({
        projector,
        soundSystem,
        videoPlayer,
        popcornMaker
    }: HomeTheaterFacadeOptions){
        this.projector = projector;
        this.soundSystem = soundSystem;
        this.videoPlayer = videoPlayer;
        this.popcornMaker = popcornMaker;
    }

    watchMovie(movie: string){
        console.log('\n%cPreparando para ver la Pelicula', COLORS.blue);
        this.projector.turnOn();
        this.soundSystem.on();
        this.popcornMaker.poppingPopcorn();
        this.videoPlayer.on();
        this.videoPlayer.play(movie);
        console.log('%cDisfrute la Pelicula', COLORS.blue);
    }

    endWatchingMovie(){
        console.log('\n%cPreparando para Detener la Pelicula', COLORS.blue);
        this.projector.turnOff();
        this.soundSystem.off();
        this.popcornMaker.turnOffPoppingPopcorn();
        this.videoPlayer.stop();
        this.videoPlayer.off();
        console.log('%cSistema Apagado', COLORS.blue);
    }
}

function main(){

    const projector = new Projector();
    const soundSystem = new SoundSystem();
    const videoPlayer = new VideoPlayer();
    const popcornMaker = new PopcornMaker();

    const homeTheater = new HomeTheaterFacade({
        projector,
        soundSystem,
        videoPlayer,
        popcornMaker,
    });


    homeTheater.watchMovie('Los Avengers');
    homeTheater.endWatchingMovie();
}

main();