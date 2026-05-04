---
title: Обзор API
---

# API Trace MVP

Базовый URL: `/api/v1`

## Эндпоинты

| Метод | Эндпоинт | Описание |
|-------|----------|----------|
| POST | `/auth/registration` | Регистрация нового пользователя |
| POST | `/auth/login` | Авторизация, получение токена |
| POST | `/auth/logout` | Завершение сессии |
| GET | `/collections` | Получить список коллекций текущего пользователя |
| POST | `/collections` | Создать новую коллекцию |
| GET | `/collections/{collectionId}` | Получить метаданные коллекции |
| PATCH | `/collections/{collectionId}` | Обновить коллекцию (название, описание) |
| DELETE | `/collections/{collectionId}` | Удалить коллекцию |
| GET | `/collections/{collectionId}/artifacts` | Получить список артефактов (с пагинацией) |
| POST | `/collections/{collectionId}/artifacts` | Добавить артефакт (файл или цитату) |
| GET | `/artifacts/{artifactId}` | Получить детали артефакта |
| PATCH | `/artifacts/{artifactId}` | Обновить теги, описание, название |
| DELETE | `/artifacts/{artifactId}` | Удалить артефакт |

## Форматы запросов и ответов

### Регистрация

```json
POST /auth/registration
{
  "email": "user@example.com",
  "password": "securepass",
  "passwordConfirm": "securepass",
  "name": "Иван"
}
```

Ответ `201 Created` с данными пользователя.

### Создание коллекции

```json
POST /collections
{
  "name": "Мемы 2025",
  "description": "Самые смешные",
  "coverUrl": "https://..."
}
```

### Добавление артефакта (multipart/form-data)

```
POST /collections/{id}/artifacts
Content-Type: multipart/form-data

file: (binary)
type: image
```

Для текстовой цитаты:

```json
POST /collections/{id}/artifacts
Content-Type: application/json
{
  "type": "text",
  "content": "Цитата из книги..."
}
```

## Авторизация

Все эндпоинты, кроме регистрации и логина, требуют заголовок:

```
Authorization: Bearer <token>
```

## Коды ответов

- `200 OK` – успешный GET/PATCH
- `201 Created` – успешное создание
- `400 Bad Request` – ошибка валидации
- `401 Unauthorized` – неверный или отсутствующий токен
- `403 Forbidden` – недостаточно прав
- `404 Not Found` – ресурс не найден
- `413 Payload Too Large` – файл превышает 25 МБ
- `429 Too Many Requests` – превышен лимит хранилища
```
