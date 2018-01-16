import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default props => (
	<View>
		<TextInput 
			style={styles.numero} 
			value={props.num}
			onChangeText={valorCampo => props.atualizaValor(props.nome, valorCampo)}
			keyboardType='numeric'
		/>
	</View>	
);

const styles = StyleSheet.create({
	numero: {
		width: 140,
		height: 80,
		fontSize: 20
	}
});