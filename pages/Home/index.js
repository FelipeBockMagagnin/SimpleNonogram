import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import logo from '../../assets/logo.png'
import noADS from '../../assets/noADS.png'
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Image source={logo} alt='logo' />
      </View>

      <ScrollView style={{ flex: 1, display: 'flex', flexDirection: 'row' }} horizontal={true} showsHorizontalScrollIndicator={false} >
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Game', { rows: 5, columns: 5 })}
        >
          <Text style={{ fontSize: 40, margin: 10, fontWeight: 'bold' }}>5x5</Text>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="award" size={20} color="black" />
            </View>
            <View>
              <Text>2M 29S</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="play" size={20} color="black" />
            </View>
            <View>
              <Text>18</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Game',  { rows: 10, columns: 10 })}
        >
          <Text style={{ fontSize: 40, margin: 10, fontWeight: 'bold' }}>10x10</Text>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="award" size={20} color="black" />
            </View>
            <View>
              <Text>4M 13S</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="play" size={20} color="black" />
            </View>
            <View>
              <Text>18</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Game', { rows: 15, columns: 15 })}
        >
          <Text style={{ fontSize: 40, margin: 10, fontWeight: 'bold' }}>15x15</Text>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="award" size={20} color="black" />
            </View>
            <View>
              <Text>7M 49S</Text>
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: -10 }}>
            <View>
              <Feather name="play" size={20} color="black" />
            </View>
            <View>
              <Text>18</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>


      <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <Feather name="alert-circle" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <Image source={noADS} alt='no ads' style={{ width: 41, height: 35 }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 20 }}>
          <Feather name="list" size={35} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    backgroundColor: '#282c34',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  card: {
    width: 250, 
    height: 150, 
    backgroundColor: 'white', 
    borderRadius: 10, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginHorizontal: 10
  }
});