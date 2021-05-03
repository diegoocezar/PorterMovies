import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';

const ErroModal = ({toggleModal, isVisible}) => {
  return (
        <Modal isVisible={isVisible} animationOutTiming={1500} useNativeDriver={true} style={styles.modal}>
          <View style={styles.modalContentContainer}>
            <Text style={styles.modalErrorText}>Could not get movie's details, check your internet connection and try again later!</Text>

            <TouchableOpacity style={styles.modalErrorButton} onPress={() => toggleModal()} >
              <Text style={styles.modalErrorButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  );
}

export default ErroModal;