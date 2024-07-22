# P_NOTIFY
DOCS: https://plebsu-shop.gitbook.io/

# What is the source, title, message, type?
- Source (You have to add the source in server side.)
- Title (This is the notify Title, Enter a custom text here, e.g. 'Notify')
- Message (You have to add the notify message here.)
- Type [ error / info / success ]

## Trigger from ``Server side``
```
  TriggerClientEvent('p_notify:notify_server', source, title, message, type)
```

## Trigger from ``Client side``
```
  TriggerEvent('p_notify:notify', title, message, type)
```

![image]([https://cdn.discordapp.com/attachments/778246034928173076/1246114222228902021/Zrzut_ekranu_2024-05-31_135256.png?ex=665b35ce&is=6659e44e&hm=98bff546aa4758573c3f68e090b3732aefa99dcdd03418bccc87b683178a6166&](https://plebsu-shop.gitbook.io/~gitbook/image?url=https%3A%2F%2F4005803354-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBo6w9CTobbPnyhBqzAMs%252Fuploads%252F0GpseiqNGR3QvEcGGdha%252FZrzut%2520ekranu%25202024-05-31%2520135256.png%3Falt%3Dmedia%26token%3D76539804-59c8-4f08-97b4-06e0096415c3&width=768&dpr=1&quality=100&sign=c1d47e08&sv=1))
