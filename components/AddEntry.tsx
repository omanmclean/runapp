import { StyleSheet, Pressable } from 'react-native';
import { View, Text, Modal } from '../components/Themed';

export default function AddEntry() {
    function handleOnClose() {

    }

    return (
        <View style={styles.container}>
            <Modal>
                <Pressable
                    style={styles.button}
                    onPress={() => handleOnClose()}
                >
                    <Text style={styles.title}>Hide Modal</Text>
                </Pressable>
                <Text>Modal here</Text>

            </Modal>
        </View>

    );
}


const styles = StyleSheet.create({
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
    button: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    fab: {
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
});