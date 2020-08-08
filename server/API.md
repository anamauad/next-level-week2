# API

Este documento lista os comandos do backend do Proffy.

O backend executa na porta 3101.

## Aulas

### Criar uma aula

`POST /classes`

```JSON
{
  "name": "<nome>",
  "avatar":"<link para avatar>",
  "whatsapp":"<número do whatsapp>",
  "bio": "<sua biografia>",
  "subject": "<nome da disciplina>",
  "cost": <valor por hora>,
  "schedule": [
    {"week_day": <dia da semana em que 1 = segunda-feira>, "from": "<horário no formato hh:mm>", "to": "<horário no formato hh:mm>"}
  ]
}
```

Exemplo:

```JSON
{
  "name": "Ana Paula Mauad",
  "avatar":"https://avatars3.githubusercontent.com/u/31990591",
  "whatsapp":"4836641000",
  "bio": "Sou apaixonada por música clássica (especialmente piano) e também gosto de rock, pop, samba e choro.<br /><br />Para ouvir esta música com qualidade e também acompanhar os vídeos, é preciso conectar vários equipamentos eletrônicos, às vezes equipamentos antigos. Como muitas pessoas desconhecem como fazer exatamente isto, este curso irá mostrar as diferenças entre os conectores, a sua finalidade e as várias possibilidades de combinações.",
  "subject": "Conexão de equipamentos eletrônicos",
  "cost": 50,
  "schedule": [
    {"week_day": 1, "from": "13:00", "to": "17:00"},
    {"week_day": 2, "from": "13:00", "to": "17:00"},
    {"week_day": 3, "from": "13:00", "to": "17:00"},
    {"week_day": 4, "from": "09:00", "to": "11:00"}
  ]
}
```

### Listar aulas

Filtrar por matéria, dia da semana e horário

`GET /classes?week_day=<indice-do-dia-da-semana>&subject=<nome-da-disciplina-exatamente>&time=<horario no formato hh:mm>`

Exemplo:

`http://localhost:3101/classes?week_day=4&subject=Conex%C3%A3o%20de%20equipamentos%20eletr%C3%B4nicos&time=09%3A00`

Resultado:

```JSON
[
  {
    "id": 1,
    "subject": "Conexão de equipamentos eletrônicos",
    "cost": 50,
    "teacher_id": 1,
    "name": "Ana Paula Mauad",
    "avatar": "https://avatars3.githubusercontent.com/u/31990591",
    "whatsapp": "4836641000",
    "bio": "Sou apaixonada por música clássica (especialmente piano) e também gosto de rock, pop, samba e choro.<br /><br />Para ouvir esta música com qualidade e também acompanhar os vídeos, é preciso conectar vários equipamentos eletrônicos, às vezes equipamentos antigos. Como muitas pessoas desconhecem como fazer exatamente isto, este curso irá mostrar as diferenças entre os conectores, a sua finalidade e as várias possibilidades de combinações."
  }
]
```

## Conexões

### Criar conexão entre aluno e professor

`POST /connections`

```JSON
{
	"teacher_id": <id do professor>
}
```

Exemplo:

```JSON
{
	"teacher_id": 1
}
```

### Total de conexões realizadas

`GET /connections`

Resultado:

```JSON
{
	"total": 10
}
```
