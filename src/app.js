import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './components';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = { num1: '', num2: '', operacao: 'Soma', resultado: ''};

		//preservando o contexto da função, mosmo se for chamada em comando.js executara a função do painel.js
		this.calcular = this.calcular.bind(this);
		this.atualizaValor = this.atualizaValor.bind(this);
		this.atualizaOperacao = this.atualizaOperacao.bind(this);
	}
	calcular() {
		let resultado = parseFloat(this.state.num1);

		if (this.state.operacao == 'subtracao') resultado -= parseFloat(this.state.num2);
		else resultado += parseFloat(this.state.num2);
		this.setState({resultado: resultado.toString()});
	}
	atualizaValor(nomeCampo, numero) {
		const obj = {};
		obj[nomeCampo] = numero;

		this.setState(obj);
	}
	atualizaOperacao(operacao) {
		this.setState({ operacao });
	}
	render() {
		return (
			<View>
				<Topo />
				<Resultado resultado={this.state.resultado}/>
				<Painel
					num1={this.state.num1}
					num2={this.state.num2}
					operacao={this.state.operacao}
					calcular={this.calcular}
					atualizaValor={this.atualizaValor}
					atualizaOperacao={this.atualizaOperacao}
				/>
			</View>
		);
	}
} 
