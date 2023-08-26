function App2() {
  const [nombre, setNombre] = useState('');
  const [contador, setContador] = useState(0);

  const constantePressButton = () => {
    console.log('Presionado boton desde la constante');
    console.log(nombre);
  };

  const incrementar = () => {
    setContador(contador + 1);
    console.log(contador);
  };

  const actualizoNombre = (texto) => {
    setNombre(texto);
    console.log(texto);
  };

  console.log('Hola Mundo');
  return (
    <View style={styles.container}>
      <Text>Hola Mundo!!</Text>
      <Text>Contador {contador}</Text>
      <TextInput
        placeholder="Ingrese su nombre"
        onChangeText={actualizoNombre}
      />
      <Button
        color="green"
        title="Soy un boton"
        onPress={constantePressButton}
      />
      <Button title="Incrementar" onPress={incrementar} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
