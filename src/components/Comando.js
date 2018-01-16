import React from 'react';
import { StyleSheet, Button } from 'react-native';

export default props => (
	<Button title="Calcular" onPress={props.acao}/>
);

const styles = StyleSheet.create({
	comando: {
		fontSize: 30,
		height: 100
	}
});