import { GameService } from './game.service';
import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { C } from '@angular/core/src/render3';

const loggerMock = { log: jest.fn() };

describe('GameService: using service instances', () => {
    it('should call logger on init ', () => {
        const gameService = new GameService(loggerMock);
        
        expect(loggerMock.log).toHaveBeenCalledWith('GameService instance created');
    });

    it('should call logger when calling gameService.startGame ', () => {
        const gameService = new GameService(loggerMock);
        loggerMock.log.mockReset();

        gameService.startGame();

        expect(loggerMock.log).toHaveBeenCalledWith('startGame called. counter: 0');
    });
});


describe('GameService: using Angular injector', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [
            GameService,
          {
            provide: LoggerService,
            useValue: loggerMock
          }
        ]
         });
    });

    it('should call logger when calling gameService.startGame ', () => {
        const gameService = TestBed.get(GameService);
        loggerMock.log.mockReset();

        gameService.startGame();

        expect(loggerMock.log).toHaveBeenCalledWith('startGame called. counter: 0');
    });
});
