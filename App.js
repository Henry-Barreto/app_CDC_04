import React from 'react';
import { View } from 'react-native';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import styles from './src/styles';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
};

export default App;