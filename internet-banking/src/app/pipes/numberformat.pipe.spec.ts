import{NumberFormatPipe} from './numberformat.pipe';
import { Pipe, PipeTransform } from '@angular/core';

describe('Trocar ponto para virgula', ()=>{
    let numberFormatPipe:NumberFormatPipe;

    beforeEach(()=>{
        numberFormatPipe = new NumberFormatPipe();
    });
    it('deve trocar ponto por virgula', ()=>{
        expect(numberFormatPipe.transform(1.32)).toContain(1,32);
    });
});