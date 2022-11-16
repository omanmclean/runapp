import React from 'react';
import { Platform, Pressable } from 'react-native';
import CloseIcon from '@mui/icons-material/Close';
import { StatusBar } from 'expo-status-bar';

import EditScreenInfo from '../components/EditScreenInfo';
import { View, Text, Modal } from './Themed';
import { BaseStyles } from './BaseStyles';


interface ModalProps {
    isModalVisible: boolean;
    onBackgroundClick: () => void;
}

const ConfirmModal: React.FC<ModalProps> = ({ onBackgroundClick, isModalVisible }) => {

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
                        <CloseIcon style={BaseStyles.button} />
                    </Pressable>
                    <Text>Modal </Text>
                </View>

                {/* Use a light status bar on iOS to account for the black space above the modal */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </Modal>
        );
    }
};

export default ConfirmModal;