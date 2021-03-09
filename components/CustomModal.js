import React from "react";
import { Modal, StyleSheet, Text, Pressable, View, Dimensions } from "react-native";

const CustomModal = ({modalVisible, redirectPage, navigation, modalText, confirmText, title, setModalVisible}) => {
  return (
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
              onPress={() => {
                if(setModalVisible != null){
                  setModalVisible(false)
                  return;
                }
                navigation.navigate(redirectPage) 
              }}
            >
              <Text style={styles.textStyle}>{confirmText}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    fontSize: 26, 
    fontWeight: '700',
    textAlign: "center",
    color: 'white',
    marginBottom: 20
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
    width: Dimensions.get('window').width / 1.8,
    marginTop: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14
  }
});

export default CustomModal;