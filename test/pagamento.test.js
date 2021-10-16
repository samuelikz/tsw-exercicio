const pagamento = require('../src/pagamento');

describe('1. Testes com cenário retornar fatura paga', () => {
    
    test('1.1 Pagamento Atrasado', () => {
        expect(pagamento.pagamentoFatura(900, '2014-07-07')).toBe(4888.5);
    })

    test('1.1 Pagamento em Dia', () => {
        expect(pagamento.pagamentoFatura(900, '2021-10-16')).toBe(900);
    })

})