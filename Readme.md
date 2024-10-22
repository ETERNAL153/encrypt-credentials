Here is a sample `README.md` file for your encryption script:

---

# Encryption Script

This project provides a simple Node.js script that encrypts data from a JSON file using AES-256-CBC encryption and stores the encrypted data in another JSON file. It uses the `crypto` module for encryption and `fs` for reading and writing files.

## Prerequisites

- [Node.js](https://nodejs.org/) (Ensure Node.js is installed on your system)

## Setup

1. Clone or download this repository to your local machine.
2. Navigate to the project directory using the terminal:
   ```bash
   cd /path/to/your/project
   ```

3. Ensure the `Resources` folder exists in the directory structure relative to `encrypt.js`. You should have two files in this folder:
   - `data.json` (The JSON file containing the data you want to encrypt)
   - `key.json` (Will be generated when the script runs to store the encryption key)
   
4. Install any necessary dependencies. However, since this project uses core Node.js modules (`crypto`, `fs`), no additional packages are needed.

## Usage

1. Place the data to be encrypted in `Resources/data.json`.

2. Run the script:
   ```bash
   node encrypt.js
   ```

3. The script will:
   - Generate a random 32-byte encryption key and store it in `Resources/key.json`.
   - Encrypt the contents of `data.json` and save the encrypted output to `Resources/encrypt.json`.

## File Structure

```
/project-root
│
├── encrypt.js               # The encryption script
├── Resources                # Directory where JSON files are stored
│   ├── data.json             # Input file with data to be encrypted
│   ├── encrypt.json          # Output file with encrypted data (generated after running the script)
│   └── key.json              # Generated file containing the encryption key
│
└── README.md                 # This readme file
```

## How It Works

- **Encryption Algorithm**: The script uses `AES-256-CBC`, which is a symmetric encryption algorithm. A random initialization vector (IV) is generated for each encryption.
- **Encryption Key**: The encryption key is a 32-byte random value, which is stored in `key.json` for later decryption.
- **IV**: The initialization vector (IV) is also stored in the output `encrypt.json` file to be used for decryption.

## Example

For example, if your `data.json` contains:
```json
{
    "credentials": {
    "username": "testusername@gmail.com",
    "password": "testuser*15password"
    }
}
```

After running the script, the `encrypt.json` file will contain something like:
```json
{
  "iv": "e94ef23bf6b837674a8423b1c...",
  "data": "a7f6d9cfbb47d8e17fc93b..."
}
```

## License

This project is licensed under the MIT License.

---

This `README.md` explains how to set up and use your encryption script, providing all the necessary details for a user to follow.