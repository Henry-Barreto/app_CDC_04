import React from 'react';
import { View, Text, ImageBackground, ScrollView } from 'react-native';
import styles from './styles';

const Noticia = ({ titulo, manchete, data, imagem }) => {
  return (
    <ImageBackground source={imagem} style={styles.noticiaContainer} imageStyle={styles.noticiaBackgroundImage}>
      <View style={styles.textoOverlay}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.manchete}>{manchete}</Text>
        <Text style={styles.data}>{data}</Text>
      </View>
    </ImageBackground>
  );
};

const noticias = [
  {
    titulo: 'Novo Jogo de Aventura Lançado',
    manchete: 'Exploradores descobrem mundos incríveis no último lançamento da série.',
    data: '11/04/2026',
    imagem: require('../img/gow.jpeg')
  },
  {
    titulo: 'Atualização Maior para RPG Clássico',
    manchete: 'Novos conteúdos e mecânicas adicionadas ao jogo favorito dos fãs.',
    data: '10/04/2026',
    imagem: require('../img/eldenring.jpeg')
  },
  {
    titulo: 'Torneio de eSports Anunciado',
    manchete: 'Competições intensas prometem prêmios milionários.',
    data: '09/04/2026',
    imagem: require('../img/r6.jpeg')
  },
  {
    titulo: 'Jogo Indie Ganha Prêmio',
    manchete: 'Desenvolvedor independente surpreende com inovação.',
    data: '08/04/2026',
    imagem: require('../img/hollow.jpeg')
  },
  {
    titulo: 'Remake de Clássico dos Anos 90',
    manchete: 'Gráficos modernos revivem memórias nostálgicas.',
    data: '07/04/2026',
    imagem: require('../img/resident.jpeg')
  }
];

const Content = () => {
  return (
    <ScrollView style={styles.contentScroll}>
      <View style={styles.contentContainer}>
        {noticias.map((noticia, index) => (
          <Noticia
            key={index}
            titulo={noticia.titulo}
            manchete={noticia.manchete}
            data={noticia.data}
            imagem={noticia.imagem}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Content;
