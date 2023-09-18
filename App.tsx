import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class SimpleCalculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0', // Inicializa o valor de exibição da calculadora como '0'
    };
  }

  // Função que lida com o pressionamento de botões
  handleButtonPress = button => {
    let newDisplayValue = this.state.displayValue; // Obtém o valor de exibição atual

    if (button === 'C') {
      newDisplayValue = '0'; // Se o botão for 'C' (Clear), redefine o valor para '0'
    } else if (button === '=') {
      try {
        newDisplayValue = eval(this.state.displayValue).toString(); // Avalia a expressão e atualiza o valor de exibição
      } catch (error) {
        newDisplayValue = 'Error'; // Se houver um erro na avaliação, exibe 'Error'
      }
    } else {
      if (this.state.displayValue === '0') {
        newDisplayValue = button; // Se o valor atual for '0', substitui-o pelo botão pressionado
      } else {
        newDisplayValue += button; // Caso contrário, anexa o botão pressionado ao valor atual
      }
    }

    this.setState({displayValue: newDisplayValue}); // Atualiza o estado com o novo valor de exibição
  };

  // Função que renderiza os botões
  renderButtons = () => {
    const buttons = [
      '7',
      '8',
      '9',
      '/',
      '4',
      '5',
      '6',
      '*',
      '1',
      '2',
      '3',
      '-',
      'C',
      '0',
      '=',
      '+',
    ];

    return buttons.map(button => (
      <TouchableOpacity
        key={button}
        style={styles.button}
        onPress={() => this.handleButtonPress(button)}>
        <Text style={styles.buttonText}>{button}</Text>
      </TouchableOpacity>
    ));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.displayValue}</Text>
        <View style={styles.buttons}>{this.renderButtons()}</View>
      </View>
    );
  }
}

// Estilos CSS para a interface
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  display: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#d0d0d0',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default SimpleCalculator;
