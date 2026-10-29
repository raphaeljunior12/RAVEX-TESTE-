const VERSAO = '1.0.0';

console.log('╔══════════════════════════════════════╗');
console.log('║       🧪 RAVEX-TESTE-HOST V1        ║');
console.log('╚══════════════════════════════════════╝');
console.log(`✅ Versão: ${VERSAO}`);
console.log(`⚙️ Node: ${process.version}`);
console.log(`📂 Diretório: ${process.cwd()}`);
console.log('🟢 Bot de teste iniciado com sucesso.');

const intervalo = setInterval(() => {
    console.log(`💓 RAVEX-TESTE-HOST v${VERSAO} online`);
}, 30000);

function encerrar(sinal) {
    console.log(`🛑 ${sinal} recebido. Encerrando RAVEX-TESTE-HOST...`);
    clearInterval(intervalo);
    process.exit(0);
}

process.on('SIGTERM', () => encerrar('SIGTERM'));
process.on('SIGINT', () => encerrar('SIGINT'));
