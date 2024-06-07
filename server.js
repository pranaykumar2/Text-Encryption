'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const path = require('path');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
const IV_LENGTH = 16;

function encrypt(text) {
    try {
        let iv = crypto.randomBytes(IV_LENGTH);
        let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return iv.toString('hex') + ':' + encrypted.toString('hex');
    } catch (error) {
        console.error('Encryption error:', error);
        throw error;
    }
}

function decrypt(text) {
    try {
        let textParts = text.split(':');
        let iv = Buffer.from(textParts.shift(), 'hex');
        let encryptedText = Buffer.from(textParts.join(':'), 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();
    } catch (error) {
        console.error('Decryption error:', error);
        throw error;
    }
}

app.post('/encrypt', (req, res) => {
    try {
        const { text } = req.body;
        const encrypted = encrypt(text);
        res.json({ encrypted });
    } catch (error) {
        console.error('Error in /encrypt route:', error);
        res.status(500).json({ error: 'Encryption failed' });
    }
});

app.post('/decrypt', (req, res) => {
    try {
        const { text } = req.body;
        const decrypted = decrypt(text);
        res.json({ decrypted });
    } catch (error) {
        console.error('Error in /decrypt route:', error);
        res.status(500).json({ error: 'Decryption failed' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
