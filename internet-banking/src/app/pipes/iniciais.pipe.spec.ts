import {IniciaisPipe} from './iniciais.pipe';
import { Pipe, PipeTransform } from '@angular/core';

describe('Suite de testes de Primeira letra uppercase', ()=>{
    let iniciaisPipe: IniciaisPipe;

    beforeEach(()=>{
        iniciaisPipe = new IniciaisPipe();
    });
    it('Deve retornar a primeira letra uppercase', ()=>{
        expect(iniciaisPipe.transform('p')).toEqual('P');
    });
});