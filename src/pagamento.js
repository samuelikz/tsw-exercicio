function pagamentoFatura(valor, diaA) {

        const now = new Date(); // Data de hoje
        const past = new Date(diaA); // Outra data no passado
        const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).

        // Mostra a diferença em dias
        // console.log('Entre ' + diaA + ' até agora já se passaram ' + days + ' dias');
        
        if (days > 1) {
            juros = days * 1.50; // Calcular juros

            total = valor + juros; // Total a pagar com juros!
            console.log('Fatura paga com atraso Total a Pagar: '+ total);
            return total
        } else {
            total = valor
            console.log('Fatura paga em dia Total a Pagar: '+ total);
            return total
        }

}

module.exports.pagamentoFatura = pagamentoFatura;