import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

const CustomModal = ({modalVisible, redirectPage, navigation, modalText, confirmText, title}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide' 
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{modalText}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => navigation.navigate(redirectPage) }
            >
              <Text style={styles.textStyle}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalTitle: {
    fontSize: 20, 
    fontWeight: '700',
    textAlign: "center",
    color: 'white'
  },
  modalView: {
    backgroundColor: "#272b33",
    borderRadius: 20,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 15,
    alignItems: "center",    
    width: Dimensions.get('window').width / 1.2
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: "#272b33",
    width: Dimensions.get('window').width / 1.8
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'white'
  }
});

export default CustomModal;