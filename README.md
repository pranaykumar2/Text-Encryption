
# Encrypt/Decrypt App

Encrypt/Decrypt App is a simple web application for encrypting and decrypting text using AES-256 encryption. It provides a user-friendly interface for encrypting sensitive information securely.

![App Preview](preview.png)

## Features

- Encrypt any text input securely using AES-256 encryption.
- Decrypt encrypted text to its original form.
- Copy encrypted or decrypted text to clipboard with a single click.
- Clean and intuitive user interface for ease of use.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/encrypt-decrypt-app.git
   ```

2. Install dependencies:

   ```bash
   cd encrypt-decrypt-app
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add your encryption key in the `.env` file:
     ```
     ENCRYPTION_KEY=your_encryption_key_here
     ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Open your web browser and navigate to `http://localhost:3000`.

6. Enter the text you want to encrypt or decrypt in the input area.
   
7. Click on the "Encrypt" button to encrypt the text, or "Decrypt" button to decrypt the text.

8. The encrypted or decrypted text will be displayed in the output area. Click on it to copy to clipboard.

## Technologies Used

- Node.js
- Express.js
- Crypto module for AES encryption
- HTML/CSS/JavaScript for frontend

## Contributing

Contributions are welcome! Please feel free to open a pull request for bug fixes, improvements, or new features. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).


