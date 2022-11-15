import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { View, Text, Modal } from '../components/Themed';
import { BaseStyles } from '../components/BaseStyles';


interface ModalProps {
    isModalVisible: boolean;
    onBackgroundClick: () => void;
}

const AddEntryModal: React.FC<ModalProps> = ({ onBackgroundClick, isModalVisible }) => {

    if (!isModalVisible) {
        return null;
    }
    else {
        return (
            <Modal>
                <View style={BaseStyles.container}>
                    <Pressable
                        style={BaseStyles.button}
                        onPress={onBackgroundClick}
                    >
                        <Text style={BaseStyles.title}>Hide Modal</Text>
                    </Pressable>
                    <Text>Modal here</Text>
                </View>
            </Modal>
        );
    }
};

export default AddEntryModal;