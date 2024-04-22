// Importe os módulos necessários
import TelegramBot from 'node-telegram-bot-api';
import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();
const botToken = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });

// Horário de funcionamento da empresa
const horaAbertura = 9;
const horaFechamento = 18;

// Flag para controle de solicitação de e-mail
let isEmailRequested = false;

// Lida com as mensagens recebidas
bot.on('message', async (msg) => {
    const { chat } = msg;
    const chatId = chat.id;
    const currentHour = new Date().getHours();

    if (currentHour >= horaAbertura && currentHour <= horaFechamento) {
        // Horário comercial: envia o link
        bot.sendMessage(chatId, 'Esse é o link: https://faesa.br');
    } else {
        // Fora do horário comercial: solicita e armazena o e-mail
        if (!isEmailRequested) {
            bot.sendMessage(
                chatId,
                `Fora do horário de funcionamento (${horaAbertura}h às ${horaFechamento}h). Digite seu e-mail para entrarmos em contato.`
            );
            isEmailRequested = true;
        }
    }
});

// Lida com mensagens de texto (entrada de e-mail)
bot.on('text', async (msg) => {
    const chatId = msg.chat.id;
    const email = msg.text;

    if (isEmailRequested) {
        const emailPattern = /\S+@\S+\.\S+/;
        if (typeof email === 'string' && emailPattern.test(email)) {
            try {
                await prisma.email.create({ data: { email } });
                bot.sendMessage(chatId, 'E-mail registrado para contato futuro.');
                isEmailRequested = false;
            } catch (error) {
                console.error('Erro ao armazenar o e-mail:', error);
                bot.sendMessage(
                    chatId,
                    'Erro ao processar sua solicitação, tente novamente mais tarde.'
                );
            }
        } else {
            bot.sendMessage(chatId, 'Forneça um endereço de e-mail válido.');
        }
    }
});
