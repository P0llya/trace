---
title: Развертывание (шаблон)
---

# Шаблон документа «Развертывание системы»

## Цель

Описать процесс установки и настройки Trace в production-окружении.

## Требования к окружению

- **Node.js** ≥18
- **PostgreSQL** ≥14
- **S3-совместимое хранилище** (например, Yandex Object Storage, AWS S3)
- **RabbitMQ** (для асинхронных задач)
- **Redis** (для сессий и кэша)

## Переменные окружения (пример)

| Переменная | Описание |
|------------|----------|
| `DATABASE_URL` | postgresql://user:pass@host:5432/trace |
| `S3_ENDPOINT` | https://storage.yandexcloud.net |
| `S3_BUCKET` | trace-files |
| `S3_ACCESS_KEY` | ... |
| `S3_SECRET_KEY` | ... |
| `RABBITMQ_URL` | amqp://guest:guest@localhost:5672 |
| `REDIS_URL` | redis://localhost:6379 |
| `JWT_SECRET` | секретный ключ для токенов |

## Инструкция по запуску (Docker)

```bash
# Клонирование репозитория
git clone https://github.com/P0llya/trace.git
cd trace

# Сборка и запуск через docker-compose
docker-compose up -d
```

## Миграции БД

```bash
npm run migrate:up
```

## Мониторинг

- Использовать PM2 или systemd для поддержания процессов.
- Настроить логирование в ELK или Sentry.

## CI/CD

GitHub Actions собирает Docker-образ и деплоит на сервер при пуше в ветку `main`. Конфигурация лежит в `.github/workflows/deploy.yml`.
```
