import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = () => {
  const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const hoje = new Date();
  const diaDaSemana = diasSemana[hoje.getDay()];

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>{diaDaSemana}</Text>
      <Text style={styles.footerText}>Henrique Barreto Silva</Text>
    </View>
  );
};

export default Footer;
