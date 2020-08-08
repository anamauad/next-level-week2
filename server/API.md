# API

Esta API lista os comandos do backend do Proffy

## Aulas

- Criar uma aula

`POST /classes`

```
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

```
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

- Listar aulas
  - Filtrar por matéria, dia da semana e horário
- Listar professores
  - Filtrar por dia, hora e disciplina

## Conexões

- Criar conexão entre aluno e professor
- Total de conexões realizadas
