import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const handleOpenGithub = (): void => {
    Linking.openURL('https://github.com/Piemoroni');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nome}>PIETRA MORONI</Text>

      <Image
        source={require('./assets/eu.png')}
        style={styles.imagem}
      />

      <View style={styles.infoContainer}>
        <Text style={styles.topico}>Escolaridade / Experiência:</Text>
        <Text style={styles.item}>• 3º Ano do Ensino Médio</Text>
        <Text style={styles.item}>• Último semestre do curso de DES no SENAI</Text>
        <Text style={styles.item}>• Jovem Aprendiz na empresa Fernandez Papel e Indústria</Text>
      </View>

      <TouchableOpacity 
        style={styles.botaoGithub} 
        onPress={handleOpenGithub}
      >
        <Text style={styles.textoBotao}>Acessar Meu GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbe4ee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#800033',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagem: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: '#c2185b',
    borderWidth: 4,
    marginBottom: 24,
  },
  infoContainer: {
    width: '100%',
    maxWidth: 500, 
    alignSelf: 'center',
    backgroundColor: '#f8bbd0',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderColor: '#f48fb1',
    borderWidth: 1,
  },
  topico: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#800033',
  },
  item: {
    fontSize: 15,
    marginBottom: 6,
    color: '#4a001e',
  },
  botaoGithub: {
    backgroundColor: '#c2185b',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});