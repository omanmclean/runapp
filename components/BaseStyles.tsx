import { StyleSheet } from 'react-native';

export const BaseStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    button: {
        position: 'absolute',
        right: 20,
        top: 20,
        fill: 'white',
    }
});