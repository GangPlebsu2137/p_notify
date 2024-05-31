# P_NOTIFY
DOCS: https://plebsu-shop.gitbook.io/

# What is the source, title, message, type?
-Source (You have to add the source in server side.)
-Title (This is the notify Title, Enter a custom text here, e.g. 'Notify')
-Message (You have to add the notify message here.)
-Type [ error / info / success ]

## Trigger from ``Server side``
```
  TriggerClientEvent('p_notify:notify_server', source, title, message, type)
```

## Trigger from ``Client side``
```
  TriggerEvent('p_notify:notify', title, message, type)
```

![image](https://cdn.discordapp.com/attachments/778246034928173076/1246114222228902021/Zrzut_ekranu_2024-05-31_135256.png?ex=665b35ce&is=6659e44e&hm=98bff546aa4758573c3f68e090b3732aefa99dcdd03418bccc87b683178a6166&)
