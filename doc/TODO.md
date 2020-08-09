# Lista TODO

## Front-end

- [ ] Dark mode

## Back-end

- [ ] Não permitir o cadastro de classes repetidas

## Mobile

- [ ] picker para campos da lista de professores

- [ ] atualizar contatos da lista de professores quando um contato for favoritado/desfavoritado na lista de favoritos

- [ ] useEffect cleanup function (memory leak)

> https://dev.to/otamnitram/react-useeffect-cleanup-how-and-when-to-use-it-2hbm

```js
function Example(props) {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchAPI.then(() => {
      if (mounted) {
        setloading(false);
      }
    });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return <div>{loading ? <p>loading...</p> : <p>Fetched!!</p>}</div>;
}
```

```js
useEffect(() => {
  const source = axios.CancelToken.source();

  const fetchUsers = async () => {
    try {
      await Axios.get("/users", {
        cancelToken: source.token,
      });
      // ...
    } catch (error) {
      if (Axios.isCancel(error)) {
      } else {
        throw error;
      }
    }
  };

  fetchData();

  return () => {
    source.cancel();
  };
}, []);
```

# Proffy versão 2

[Descrição do Desafio](https://www.notion.so/Vers-o-2-0-Proffy-eefca1b981694cd0a895613bc6235970)

Layout: figma.com

- arquivos [Proffy Mobile 2](Proffy_Mobile_2.fig) e [Proffy Web 2](Proffy_Web_2.fig)
