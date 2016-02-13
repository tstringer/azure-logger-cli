# Azure Logger CLI

*CLI to consume Azure storage table data generated by [azure-logger](https://www.npmjs.com/package/azure-logger)*

## Installation

```
npm install --global azure-logger-cli
```

## Usage

> :bulb: Before you run this application you should set your user environment variables `AZURE_STORAGE_ACCOUNT` and `AZURE_STORAGE_KEY` to the storage account name and the corresponding key (ensure that you set them in user scope and not system scope so only you have access to them).  You can also pass these as parameters (`--account` and `--key`) when calling `azure-logger-cli` if you'd rather not store this information in user environment variables

### Get help

```
azure-logger --help
```

### Get all records from a table

```
azure-logger --table <tablename> [--account <account> --key <key>]
```

### Get top records from a table

```
azure-logger --table <tablename> --top <topnum> [--account <account> --key <key>]
```