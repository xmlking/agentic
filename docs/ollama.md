# Ollama

## Setup

Pull local models (optional)

```shell
ollama pull llama3.2:latest
ollama pull nomic-embed-text:latest # to generate embeddings
ollama pull bge-m3:latest # to generate embeddings
# ollama pull mistral:latest
# ollama pull phi3:latest
# ollama pull deepseek-r1:7b
```

## Run

**Optionally** run local model via ollama

```shell
ollama run llama3.2:latest
# ollama run deepseek-r1:7b
```

> use

```shell
ollama ls
ollama ps
ollama stop llama3.2:latest
```
